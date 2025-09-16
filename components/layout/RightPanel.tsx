import Image from "next/image";
import { Bell, Bug, UserRound, Radio } from "lucide-react";
import type { Notification, Activity } from "../../types/dashboard";

export default function RightPanel({
  notifications,
  activities,
  contacts,
  className,
}: {
  notifications: Notification[];
  activities: Activity[];
  contacts: string[];
  className?: string;
}) {
  function pickNotificationIcon(title: string) {
    const normalized = title.toLowerCase();
    if (normalized.includes("bug") || normalized.includes("error") || normalized.includes("issue")) return Bug;
    if (normalized.includes("user") || normalized.includes("account") || normalized.includes("registered")) return UserRound;
    if (normalized.includes("subscribed") || normalized.includes("follow") || normalized.includes("joined")) return Radio;
    return Bell;
  }
  return (
    <aside className="h-auto md:h-auto xl:h-screen xl:sticky xl:top-0 overflow-visible xl:overflow-hidden">
      <section className="border border-gray-200 bg-white p-4 m-6  mt-0 rounded-xl md:m-4 md:rounded-xl xl:m-0 xl:rounded-none  xl:h-full">
        <div className="mb-4 font-medium">Notifications</div>
        <ul>
          {notifications.map((n, i) => {
            const Icon = pickNotificationIcon(n.title);
            return (
              <li key={i} className="flex items-start gap-3 py-3 text-sm first:pt-0 last:pb-0">
                <div className="mt-0.5 h-6.5 w-6.5 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600 ring-1 ring-gray-200">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-gray-800">{n.title}</div>
                  <div className="text-gray-500 text-xs">{n.time}</div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 mb-3 font-medium">Activities</div>
        <ul className="space-y-3">
          {activities.map((a, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <div className="relative h-7 w-7 overflow-hidden rounded-full ring-1 ring-gray-200">
                <Image src={`/assets/avatars/${i+1}.jpg`} alt="avatar" width={28} height={28} />
              </div>
              <div className="min-w-0">
                <div className="truncate text-gray-800">{a.text}</div>
                <div className="text-gray-500 text-xs">{a.time}</div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 mb-3 font-medium">Contacts</div>
        <ul className="space-y-3">
          {contacts.map((c, i) => (
            <li key={i} className="flex items-center gap-3 text-sm">
              <div className="h-7 w-7 overflow-hidden rounded-full ring-1 ring-gray-200">
                <Image src={`/assets/avatars/${i+1}.jpg`} alt={c} width={28} height={28} />
              </div>
              <span className="truncate">{c}</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}



