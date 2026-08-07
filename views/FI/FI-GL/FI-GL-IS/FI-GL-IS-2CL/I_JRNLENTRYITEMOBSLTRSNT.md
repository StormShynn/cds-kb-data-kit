---
name: I_JRNLENTRYITEMOBSLTRSNT
description: Jrnlentryitemobsltrsnt
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
# I_JRNLENTRYITEMOBSLTRSNT

**Jrnlentryitemobsltrsnt**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `JrnlEntryItemObsoleteReason` | ✓ | |  | `cast( substring( dd07t.domvalue_l, 1, 1) as fins_obsolete_item_reason preserving type )` |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `JrnlEntryItemObsoleteRsnName` |  | |  | `cast( dd07t.ddtext as fis_fin_acc_type_name preserving type )` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @Analytics: { dataExtraction.enabled: true }  
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFIJEIOBSLTRT' 
@ObjectModel.representativeKey: 'JrnlEntryItemObsoleteReason'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@Metadata.ignorePropagatedAnnotations: true  
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Obsolete Reason of Entry Item - Text'
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE  ]

define view entity I_JrnlEntryItemObsltRsnT as select from dd07t

association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{

  key cast( substring( dd07t.domvalue_l, 1, 1) as fins_obsolete_item_reason preserving type ) as JrnlEntryItemObsoleteReason,

  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
  @Analytics.hidden: true
  @Consumption.hidden: true    
  dd07t.domvalue_l as DomainValue,  

  @Semantics.text: true
  cast( dd07t.ddtext as fis_fin_acc_type_name preserving type ) as JrnlEntryItemObsoleteRsnName,
    _Language

}
where dd07t.domname = 'FINS_OBSOLETE_ITEM_REASON' and dd07t.as4local = 'A';
```
