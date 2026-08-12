---
name: I_VALNDOCPROCESSINGSTATUS
description: "Valuation Document Processing Status"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCPROCESSINGSTATUS')/$value
semantic_en: "Valuation Document Processing Status"
semantic_vi: "Valuation Document Processing Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "valuation"
  - "document"
  - "processing"
  - "status"
tags:
  - IS
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_VALNDOCPROCESSINGSTATUS

**Valuation Document Processing Status**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCPROCESSINGSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessingStatus` | ✓ | |  | `cast (domvalue_l as oiu_proc_status )` | `CHAR(1)` | Valuation Document Processing Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ValnDocProcessingStatusT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCPROCESSINGSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCPROCESSINGSTATUS')/$value)*

```abap
@EndUserText.label: 'Valuation Document Processing Status'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
//max sqlViewName 16 char '________________'
@AbapCatalog.sqlViewName: 'IPVVALNDOCPRSTS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ProcessingStatus'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAValDocProcessingStatus'

define view I_ValnDocProcessingStatus
  as select from dd07l
  association [0..*] to I_ValnDocProcessingStatusT as _Text on $projection.ProcessingStatus = _Text.ProcessingStatus
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiu_proc_status ) as ProcessingStatus,
      _Text
}
where
      domname  = 'OIU_PROC_STATUS'
  and as4local = 'A';
```
