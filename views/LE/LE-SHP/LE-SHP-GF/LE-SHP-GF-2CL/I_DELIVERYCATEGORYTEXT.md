---
name: I_DELIVERYCATEGORYTEXT
description: "Deliverycategorytext"
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
  - text-view
  - delivery
  - text
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_DELIVERYCATEGORYTEXT

**Deliverycategorytext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryCategory` | ✓ | |  | `SUBSTRING(domvalue_l, 1, 2)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `DeliveryCategoryName` |  | |  | `ddtext` |  |  |
| `_DeliveryCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryCategory` | `I_DeliveryCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: false
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'DeliveryCategory'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Delivery Category - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDELIVCATTEXT'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]

define view I_DeliveryCategoryText
as select from dd07t

association[0..1] to I_DeliveryCategory as _DeliveryCategory on $projection.DeliveryCategory = _DeliveryCategory.DeliveryCategory
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_DeliveryCategory'
    key SUBSTRING(domvalue_l, 1, 2) as DeliveryCategory,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    
    @Semantics.text: true
    ddtext as DeliveryCategoryName,
    
    //Associations
    _DeliveryCategory,
    _Language
}
where (dd07t.domname = 'DLVTP') and (dd07t.as4local = 'A');
```
