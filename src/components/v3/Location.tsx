import { Card, CardContent } from "../ui/card";
import { MapPin, Navigation } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">찾아오는 길</h2>
          <p className="text-xl text-gray-600">
            ㈜비센스바움으로 방문하시는 길을 안내해드립니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2">본사 주소</h3>
                  <p className="text-gray-600">
                    서울특별시 강남구<br />
                    (상세 주소는 문의를 통해 안내드립니다)
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-blue-600" />
                    지하철 이용 시
                  </h4>
                  <ul className="text-gray-600 space-y-1 ml-6">
                    <li>• 2호선 역삼역 3번 출구에서 도보 5분</li>
                    <li>• 9호선 선정릉역 2번 출구에서 도보 7분</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-blue-600" />
                    버스 이용 시
                  </h4>
                  <ul className="text-gray-600 space-y-1 ml-6">
                    <li>• 간선버스: 146, 240, 360, 740</li>
                    <li>• 지선버스: 3412, 4318, 4419</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-blue-600" />
                    주차 안내
                  </h4>
                  <p className="text-gray-600 ml-6">
                    건물 지하 주차장 이용 가능 (방문 시 사전 연락 필수)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {/* 카카오맵 또는 구글맵 임베드 영역 */}
              <div className="w-full h-full min-h-[400px] bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>지도는 실제 위치 정보와 함께<br />카카오맵 또는 구글맵을 연동하세요</p>
                  <p className="text-sm mt-2">
                    iframe 또는 API를 통해 지도를 삽입할 수 있습니다
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
