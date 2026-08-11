---
name: I_AGENCYPAYORREPORTTYPET
description: "Agency Pay or Report Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGENCYPAYORREPORTTYPET')/$value
semantic_en: "Agency Pay or Report Type - Text"
semantic_vi: "Agency Pay or Report Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "agency"
  - "pay"
  - "report"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_AGENCYPAYORREPORTTYPET

**Agency Pay or Report Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGENCYPAYORREPORTTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgencyPayOrReportType` | ✓ | |  | `cast (domvalue_l as oiuy3_tx_pay_report_flag )` | `CHAR(1)` | Royalty 2.0 - TX GLO/TAMU - Pay/Report Flag |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `AgencyPayOrReportTypeName` |  | |  | `cast (ddtext as oiu_vdm_agcy_payrpt_type_name )` | `CHAR(60)` | Agency Pay or Report Type Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGENCYPAYORREPORTTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGENCYPAYORREPORTTYPET')/$value)*

```abap
@EndUserText.label: 'Agency Pay or Report Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVAGCYPRTT'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ObjectModel.representativeKey: 'AgencyPayOrReportType'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@Metadata.ignorePropagatedAnnotations:true

define view I_AgencyPayOrReportTypeT
  as select from dd07t
{
  key cast (domvalue_l as oiuy3_tx_pay_report_flag )                 as AgencyPayOrReportType,
      @Semantics.language
  key cast( ddlanguage as spras )                                    as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_agcy_payrpt_type_name )                as AgencyPayOrReportTypeName
}
where
      domname  = 'OIUY3_TX_PAY_REPORT_FLAG'
  and as4local = 'A';
```
