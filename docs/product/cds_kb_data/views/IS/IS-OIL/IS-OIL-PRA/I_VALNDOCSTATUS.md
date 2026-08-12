---
name: I_VALNDOCSTATUS
description: "Valuation Document Status"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCSTATUS')/$value
semantic_en: "Valuation Document Status"
semantic_vi: "Valuation Document Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "valuation"
  - "document"
  - "status"
tags:
  - IS
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_VALNDOCSTATUS

**Valuation Document Status**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValuationDocumentStatus` | ✓ | |  | `cast (domvalue_l as oiu_doc_status )` | `CHAR(2)` | Valuation Document Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ValnDocStatusT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCSTATUS')/$value)*

```abap
@EndUserText.label: 'Valuation Document Status'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVVALNDOCSTS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ValuationDocumentStatus'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAValuationDocumentStatus'

define view I_ValnDocStatus
  as select from dd07l
  association [0..*] to I_ValnDocStatusT as _Text on $projection.ValuationDocumentStatus = _Text.ValuationDocumentStatus
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiu_doc_status ) as ValuationDocumentStatus,
      _Text
}
where
      domname  = 'OIU_DOC_STATUS'
  and as4local = 'A';
```
