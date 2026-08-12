---
name: I_AGENCYPAYORREPORTTYPE
description: "Agency Pay or Report Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGENCYPAYORREPORTTYPE')/$value
semantic_en: "Agency Pay or Report Type"
semantic_vi: "Agency Pay or Report Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "agency"
  - "pay"
  - "report"
  - "type"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_AGENCYPAYORREPORTTYPE

**Agency Pay or Report Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGENCYPAYORREPORTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgencyPayOrReportType` | ✓ | |  | `cast (domvalue_l as oiuy3_tx_pay_report_flag)` | `CHAR(1)` | Royalty 2.0 - TX GLO/TAMU - Pay/Report Flag |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgencyPayOrReportTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGENCYPAYORREPORTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGENCYPAYORREPORTTYPE')/$value)*

```abap
@EndUserText.label: 'Agency Pay or Report Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVAGCYPRT'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ObjectModel.representativeKey: 'AgencyPayOrReportType'
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAAgencyReportType'

define view I_AgencyPayOrReportType as select from dd07l
  association [0..*] to I_AgencyPayOrReportTypeT as _Text on $projection.AgencyPayOrReportType = _Text.AgencyPayOrReportType
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiuy3_tx_pay_report_flag) as AgencyPayOrReportType,
      _Text
}
where
      domname  = 'OIUY3_TX_PAY_REPORT_FLAG'
  and as4local = 'A';
```
