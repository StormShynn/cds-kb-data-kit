---
name: I_PRATAXPYBLSTATUS
description: "PRA Taxes Payable Status"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXPYBLSTATUS')/$value
semantic_en: "PRA Taxes Payable Status"
semantic_vi: "PRA Taxes Payable Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "taxes"
  - "payable"
  - "status"
  - "pybl"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXPYBLSTATUS

**PRA Taxes Payable Status**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXPYBLSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxPyblStatus` | ✓ | |  | `cast (domvalue_l as oiux4_status )` | `CHAR(2)` | Taxes Payable Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRATaxPyblStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXPYBLSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXPYBLSTATUS')/$value)*

```abap
@EndUserText.label: 'PRA Taxes Payable Status'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTPSTATUS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'TaxPyblStatus'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRATaxesPayableStatus'

define view I_PRATaxPyblStatus
  as select from dd07l
  association [0..*] to I_PRATaxPyblStatusText as _Text on $projection.TaxPyblStatus = _Text.TaxPyblStatus
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiux4_status ) as TaxPyblStatus,
      _Text
}
where
      domname  = 'OIUX4_STATUS'
  and as4local = 'A';
```
