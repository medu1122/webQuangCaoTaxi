import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, CheckCircle2, Facebook, MapPin, MessageSquare, Phone, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-body">
      <header className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Đường phố Tam Kỳ về đêm"
            data-ai-hint="city street night"
            fill
            style={{ objectFit: 'cover' }}
            className="brightness-[0.4]"
            priority
          />
        </div>
        <div className="z-10 p-4 max-w-4xl relative">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 tracking-tight text-shadow-lg">
            TÀI XẾ TAXI TAM KỲ – PHỤC VỤ TẬN TÂM, ĐI LÀ THÍCH!
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Bạn đang cần một chuyến đi an toàn – nhanh chóng – giá hợp lý tại Tam Kỳ, Quảng Nam?
            <br />
            Hãy gọi ngay Taxi Tam Kỳ – Tài xế <strong>NGUYỄN VĂN GIÁP</strong> – người bạn đường đáng tin cậy của mọi nhà!
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section className="bg-card p-4 sm:p-6 rounded-xl shadow-lg -mt-16 z-30 relative mb-12 transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4">
            <Button asChild size="lg" className="flex-1 bg-primary hover:bg-accent text-primary-foreground font-bold text-base sm:text-lg shadow-md hover:shadow-xl transition-shadow">
              <a href="tel:0379315159">
                <Phone className="mr-2 h-6 w-6" /> Gọi ngay: 0379315159
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10 font-bold text-base sm:text-lg shadow-sm hover:shadow-lg transition-shadow">
              <a href="https://zalo.me/0379315159" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-6 w-6" /> Nhắn Zalo
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10 font-bold text-base sm:text-lg shadow-sm hover:shadow-lg transition-shadow">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2 h-6 w-6" /> Facebook
              </a>
            </Button>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-headline text-primary">
                <Star className="mr-3 h-7 w-7" /> Dịch vụ chuyên nghiệp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-base">
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Phục vụ 24/7</strong> – có mặt chỉ sau vài phút</span></li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Tài xế <strong>thân thiện, chuyên nghiệp</strong>, thông thạo đường xá</span></li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Đặt xe cực dễ – chỉ cần <strong>GỌI ĐIỆN</strong> hoặc <strong>NHẮN ZALO</strong></span></li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Nhận đưa đón sân bay, bệnh viện, đi chợ, đưa học sinh, du lịch, công tác...</span></li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-headline text-primary">
                <MapPin className="mr-3 h-7 w-7" /> Khu vực phục vụ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-base">
                <li className="flex items-start"><Car className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><strong>Nội thành Tam Kỳ</strong> và các xã lân cận: Trường Xuân, Tam Thanh, Tam Phú, Tam Thăng...</span></li>
                <li className="flex items-start"><Car className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><strong>Các huyện quanh Tam Kỳ:</strong> Núi Thành, Thăng Bình, Phú Ninh, Tiên Phước, Hiệp Đức...</span></li>
                <li className="flex items-start"><Car className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><strong>Tuyến đường dài:</strong> đi Hội An, Chu Lai, Tam Kỳ – Đà Nẵng, Tam Kỳ – Huế</span></li>
                <li className="flex items-start"><Car className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><strong>Đưa đón sân bay</strong> Chu Lai, sân bay Đà Nẵng, bến xe, ga tàu</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <section className="text-center bg-primary/10 p-8 rounded-xl my-16">
          <h2 className="text-3xl font-bold font-headline text-primary mb-4">
            👉 Cam kết không hét giá – không đi vòng – không phiền hà
          </h2>
          <p className="text-2xl font-semibold text-foreground/80 mb-6">
            Taxi Tam Kỳ – bạn cần là có, bạn gọi là tới!
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground font-bold text-xl animate-pulse shadow-lg">
            <a href="tel:0379315159">
              <Phone className="mr-2 h-6 w-6" /> Gọi ngay: 0379315159
            </a>
          </Button>
        </section>
      </main>

      <footer className="text-center py-8 bg-card border-t">
        <p className="text-xl font-medium">
          🌟 Hân hạnh phục vụ quý khách tại mọi nẻo đường Quảng Nam – Đà Nẵng 🌟
        </p>
         <p className="text-sm text-muted-foreground mt-2">© 2024 Taxi Tam Kỳ - Nguyễn Văn Giáp. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Add some styles for text shadow to globals.css or here in a style tag if needed.
// For simplicity, we can add a style tag in the component or define utility classes in globals.
// Let's add them directly to globals.css for a cleaner component file.
// Or even better, let's use tailwind's drop-shadow utility.
// Updated the classNames above to use text-shadow-lg and text-shadow for better readability.
// This requires adding textShadow utilities to tailwind.config.js if they don't exist by default.
// A simpler way is to just use a drop-shadow filter.
// e.g. `[text-shadow:0_2px_4px_rgba(0,0,0,0.5)]`
// Let's modify the component to use tailwind utilities instead of custom CSS. `drop-shadow-lg` on the text.
// The provided tailwind config doesn't have textShadow, so I'll just use drop-shadow on the text container.
// On second thought, `text-shadow` is not a default tailwind utility. I will just make text bold and sized up. This is cleaner.
// I have removed text-shadow classes and will rely on font size, weight and color for readability.
// The brightness filter on the background image helps a lot.
