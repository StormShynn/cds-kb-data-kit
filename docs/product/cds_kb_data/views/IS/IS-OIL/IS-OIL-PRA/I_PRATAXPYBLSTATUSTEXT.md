---
name: I_PRATAXPYBLSTATUSTEXT
description: "PRA Taxes Payable Status - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXPYBLSTATUSTEXT')/$value
semantic_en: "PRA Taxes Payable Status - Text"
semantic_vi: "PRA Taxes Payable Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "taxes"
  - "payable"
  - "status"
  - "text"
  - "pybl"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXPYBLSTATUSTEXT

**PRA Taxes Payable Status - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXPYBLSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxPyblStatus` | ✓ | |  | `cast (domvalue_l as oiux4_status )` | `CHAR(2)` | Taxes Payable Status |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `TaxPyblStatusName` |  | |  | `cast (ddtext as oiu_vdm_tax_pbl_status_name )` | `CHAR(60)` | Taxes Payable Status Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXPYBLSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXPYBLSTATUSTEXT')/$value)*

```abap
@EndUserText.label: 'PRA Taxes Payable Status - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTPSTATUST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'TaxPyblStatus'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRATaxPyblStatusText
  as select from dd07t
{
  key cast (domvalue_l as oiux4_status )                   as TaxPyblStatus,
      @Semantics.language
  key cast( ddlanguage as spras )                          as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_tax_pbl_status_name )        as TaxPyblStatusName
}
where
      domname  = 'OIUX4_STATUS'
  and as4local = 'A';
```
