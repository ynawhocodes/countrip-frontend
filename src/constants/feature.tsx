import HorizontalScrollBoxList from '../components/HorizontalScrollBoxList'
import RectangleBoxItem from '../components/RectangleBoxItem'
import SectionTitle from '../components/SectionTitle'
import SpotDto from '../@types/SpotDto'

const dummyData: SpotDto[] = [{ title: '호박소 계곡', image: '', postId: 1 }, { title: '두물머리', image: '', postId: 2 }, { title: '두암초', image: '', postId: 3 }, { title: '경주 한옥마을', image: '', postId: 4 }];
export const tabContents = [(
  <>
    <SectionTitle title="지금 당장 가야하는 여행지 Top 10" paddingHorizontal={20} />
    <HorizontalScrollBoxList datas={dummyData} />
    <SectionTitle title="경험하기 좋은 농촌 체험" isMore={true} paddingHorizontal={20} />
    {dummyData.map((data, index) => <RectangleBoxItem key={index} marginHorizontal={20} data={data} />)}
  </>), (<>
    <SectionTitle title="지금 당장 가야하는 여행지 Top 9" paddingHorizontal={20} />
    <HorizontalScrollBoxList datas={dummyData} />
    <SectionTitle title="경험하기 좋은 농촌 체험" isMore={true} paddingHorizontal={20} />
    {dummyData.map((data, index) => <RectangleBoxItem key={index} marginHorizontal={20} data={data} />)}
  </>), (<>
    <SectionTitle title="지금 당장 가야하는 여행지 Top 8" paddingHorizontal={20} />
    <HorizontalScrollBoxList datas={dummyData} />
    <SectionTitle title="경험하기 좋은 농촌 체험" isMore={true} paddingHorizontal={20} />
    {dummyData.map((data, index) => <RectangleBoxItem key={index} marginHorizontal={20} data={data} />)}
  </>), (<>
    <SectionTitle title="지금 당장 가야하는 여행지 Top 7" paddingHorizontal={20} />
    <HorizontalScrollBoxList datas={dummyData} />
    <SectionTitle title="경험하기 좋은 농촌 체험" isMore={true} paddingHorizontal={20} />
    {dummyData.map((data, index) => <RectangleBoxItem key={index} marginHorizontal={20} data={data} />)}
  </>), (<>
    <SectionTitle title="지금 당장 가야하는 여행지 Top 6" paddingHorizontal={20} />
    <HorizontalScrollBoxList datas={dummyData} />
    <SectionTitle title="경험하기 좋은 농촌 체험" isMore={true} paddingHorizontal={20} />
    {dummyData.map((data, index) => <RectangleBoxItem key={index} marginHorizontal={20} data={data} />)}
  </>)];