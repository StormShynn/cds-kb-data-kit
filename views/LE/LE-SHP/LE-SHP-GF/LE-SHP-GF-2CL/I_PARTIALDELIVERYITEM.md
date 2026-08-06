---
name: I_PARTIALDELIVERYITEM
description: Partialdeliveryitem
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - delivery
  - item-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_PARTIALDELIVERYITEM

**Partialdeliveryitem**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PartialDeliveryIsAllowed` | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as kztlf )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PartialDeliveryItemText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Partial Delivery Control Item'
@AbapCatalog.sqlViewName: 'IPARTDELITM'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@ObjectModel.resultSet.sizeCategory: #XS
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm:#SESSION_VARIABLE
@ObjectModel.representativeKey: 'PartialDeliveryIsAllowed'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'SDPartialDeliveryCode'
define view I_PartialDeliveryItem
  as select from dd07l
  association [0..*] to I_PartialDeliveryItemText as _Text on $projection.PartialDeliveryIsAllowed = _Text.PartialDeliveryIsAllowed
{
      @ObjectModel.text.association: '_Text'
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as kztlf ) as PartialDeliveryIsAllowed,

      @Search.defaultSearchElement: true
      _Text
}
where
      domname        = 'KZTLF'
  and dd07l.as4local = 'A';
```
