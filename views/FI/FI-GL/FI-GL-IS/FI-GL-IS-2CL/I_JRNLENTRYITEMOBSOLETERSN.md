---
name: I_JRNLENTRYITEMOBSOLETERSN
description: Jrnlentryitemobsoletersn
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - item-level
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_JRNLENTRYITEMOBSOLETERSN

**Jrnlentryitemobsoletersn**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JrnlEntryItemObsoleteReason` | ✓ | |  | `cast( substring( dd07l.domvalue_l, 1, 1) as fins_obsolete_item_reason preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_JrnlEntryItemObsltRsnT` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics.technicalName: 'IFIJEIOBSLTR'
@Metadata.ignorePropagatedAnnotations: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Obsolete Reason of Journal Entry Item'
@ObjectModel: {representativeKey: 'JrnlEntryItemObsoleteReason', 
               sapObjectNodeType.name: 'JournalEntryItemObsoleteReason', 
               modelingPattern: #ANALYTICAL_DIMENSION,
               supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER],
               usageType: { sizeCategory: #S,
                            dataClass:  #MASTER,
                            serviceQuality: #A }
               }                                        
//@Search.searchable: true // not possible if field is cast to the correct data element. View is not CONTAINS compatible

define view entity I_JrnlEntryItemObsoleteRsn as select from dd07l

association [0..*] to I_JrnlEntryItemObsltRsnT as _Text on $projection.JrnlEntryItemObsoleteReason = _Text.JrnlEntryItemObsoleteReason
{
//  @Search.defaultSearchElement: true
//  @Search.ranking: #HIGH
  @ObjectModel.text.association: '_Text'
  key  cast( substring( dd07l.domvalue_l, 1, 1) as fins_obsolete_item_reason preserving type ) as JrnlEntryItemObsoleteReason,
   @Analytics.hidden: true
   @Consumption.hidden: true      
  dd07l.domvalue_l as DomainValue,
    _Text
}
where 
  dd07l.domname = 'FINS_OBSOLETE_ITEM_REASON' and   dd07l.as4local = 'A';
```
