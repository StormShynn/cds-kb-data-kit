---
name: I_PARTIALDELIVERYITEMTEXT
description: "Partialdeliveryitemtext"
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
  - item-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_PARTIALDELIVERYITEMTEXT

**Partialdeliveryitemtext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PartialDeliveryIsAllowed` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as kztlf )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `PartialDeliveryIsAllowedText` |  | |  | `ddtext` |  |  |

## Source Code

```abap
@EndUserText.label: 'Partial Delivery Control Item - Text'
@AbapCatalog.sqlViewName: 'IPARTDELITMTEXT'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm:#SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PartialDeliveryIsAllowed'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@Search.searchable: true

define view I_PartialDeliveryItemText
  as select from dd07t
{
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as kztlf ) as PartialDeliveryIsAllowed,

      @Semantics.language:true
  key ddlanguage                                                                 as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      ddtext                                                                     as PartialDeliveryIsAllowedText

}
where
  domname = 'KZTLF'
```
