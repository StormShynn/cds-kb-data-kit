---
name: I_PRACONTRACTTYPE
description: "PRA Contract Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACONTRACTTYPE')/$value
semantic_en: "PRA Contract Type"
semantic_vi: "PRA Contract Type — CDS view giao diện dựa trên oiu_cm_cttyp."
keywords:
  - "pra"
  - "contract"
  - "type"
tags:
  - IS
  - component:IS-OIL-PRA
  - contract
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRACONTRACTTYPE

**PRA Contract Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACONTRACTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PRAContractType` | ✓ | |  | `ct_type_cd` | `CHAR(2)` | Contract Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRAContractTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACONTRACTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACONTRACTTYPE')/$value)*

```abap
@EndUserText.label: 'PRA Contract Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVCONTRACTTYP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'PRAContractType'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAContractType'

define view I_PRAContractType
  as select from oiu_cm_cttyp
  association [0..*] to I_PRAContractTypeText as _Text on $projection.PRAContractType = _Text.PRAContractType
{
      @ObjectModel.text.association: '_Text'
  key ct_type_cd   as PRAContractType,
      _Text
}
```
