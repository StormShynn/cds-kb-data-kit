---
name: D_SLSQTANITMGENINCPLSTSCHGD
description: "D Slsqtanitmgenincplstschgd"
semantic_vi: "View này hiển thị các thay đổi trạng thái không đầy đủ chung của mục hàng hóa trong đơn đặt hàng bán hàng, có thể được sử dụng để theo dõi các thay đổi trong trạng thái không đầy đủ chung của mục hàng hóa trong đơn đặt hàng bán hàng theo thời gian."
keywords:
  - "sales quotation"
  - "đơn đặt hàng bán hàng"
  - "incompletion status"
  - "trạng thái không đầy đủ"
  - "sales quotation item"
  - "mục hàng hóa trong đơn đặt hàng bán hàng"
  - "sap"
  - "sd-sls"
  - "sd-sls-qut"
semantic_en: "This view exposes sales quotation item general incompletion status changes, which can be used to track changes in sales quotation item incompletion status over time."
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# D_SLSQTANITMGENINCPLSTSCHGD

**D Slsqtanitmgenincplstschgd**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `SalesQuotationType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `SalesQuotationItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |
| `ItemGeneralIncompletionStatus` |  | |  | `uvall_up` |  |  |
| `PreviousItmGenIncompltnSts` |  | |  | `uvall_up` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Item Incp Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'SalesQuotationItem'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SlsQtanItmGenIncplStsChgd
{

      @Event.raisedAt.dateTime: true
      EventRaisedDateTime                     : vdm_lastchangedon;

      SalesQuotationType                      : auart_unv;

      SalesOrganization                       : vkorg;

      DistributionChannel                     : vtweg;

      OrganizationDivision                    : spart;
      
      SoldToParty                             : kunnr;
      
      SalesQuotationItemCategory              : pstyv;
      
      Product                                 : matnr; 

      @Event.qualifiesEventType: true
      @Event.previousValue.element: 'PreviousItmGenIncompltnSts'
      ItemGeneralIncompletionStatus           : uvall_up;

      PreviousItmGenIncompltnSts              : uvall_up;

}
```
