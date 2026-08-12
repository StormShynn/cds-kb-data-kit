---
name: I_WARRANTYTYPE
description: "Warrantytype"
app_component: PM-EQM-SF-WA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-SF
  - interface-view
  - component:PM-EQM-SF-WA-2CL
  - lob:Plant Maintenance
---
# I_WARRANTYTYPE

**Warrantytype**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-WA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WarrantyType` | ✓ | |  | `gaart` |  |  |
| `WarrantyCategory` |  | |  | `gatyp` |  |  |
| `NumberRange` |  | |  | `numkr` |  |  |
| `_WarrantyTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WarrantyTypeText` | `I_WarrantyTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWARRANTYTYPE'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warranty Type'

@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'WarrantyType'
@ObjectModel.semanticKey:  [ 'WarrantyType' ]
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations: true

define view I_WarrantyType
  as select from t790g
  association [0..*] to I_WarrantyTypeText as _WarrantyTypeText on $projection.WarrantyType = _WarrantyTypeText.WarrantyType
{
      @ObjectModel.text.association: '_WarrantyTypeText'
  key gaart as WarrantyType,
      gatyp as WarrantyCategory,
      numkr as NumberRange,
      //numke,
      //stsma,
      //pargr,
      //kvewe,
      //kappl,
      //kalsm,
      //popupm,
      //popupa,
      //popupf
      _WarrantyTypeText
}
```
