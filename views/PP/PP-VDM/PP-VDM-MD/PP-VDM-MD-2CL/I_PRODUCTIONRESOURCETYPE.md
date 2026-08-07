---
name: I_PRODUCTIONRESOURCETYPE
description: Productionresourcetype
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - product
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONRESOURCETYPE

**Productionresourcetype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionResourceType` | ✓ | |  | `cast(substring(typ.domvalue_l, 1, 2) as productionresourcetype preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductionResourceTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRODNRESTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ProductionResourceType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Resource Type'
@ObjectModel.sapObjectNodeType.name: 'ProductionResourceType'
@Analytics.dataExtraction.enabled: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_ProductionResourceType
  as select from dd07l as typ
  association [0..*] to I_ProductionResourceTypeText as _Text on $projection.ProductionResourceType = _Text.ProductionResourceType
{
      @ObjectModel.text.association: '_Text'
      // cast to data element
  key cast(substring(typ.domvalue_l, 1, 2) as productionresourcetype preserving type) as ProductionResourceType,

      // Associations
      _Text
}
where
      typ.domname  = 'CR_OBJTY'
  and typ.as4local = 'A'
  and typ.as4vers  = '0000';
```
