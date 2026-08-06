---
name: I_RENOTICEGIVINGPARTYTEXT
description: Renoticegivingpartytext
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - text-view
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_RENOTICEGIVINGPARTYTEXT

**Renoticegivingpartytext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| key `RENoticeGivingParty` | `cast( dd07t.domvalue_l as retmntprocprty )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `RENoticeGivingPartyName` | `cast( dd07t.ddtext as val_text preserving type )` |
| `_Language` | *Association* |
| `_RENoticeGivingParty` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IREGVNGPARTT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Notice Giving Party - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'RENoticeGivingParty'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]


                                     
define view I_RENoticeGivingPartyText
  as select from dd07t
  association        to parent I_RENoticeGivingParty as _RENoticeGivingParty on $projection.RENoticeGivingParty = _RENoticeGivingParty.RENoticeGivingParty
  association [0..1] to I_Language                   as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_RENoticeGivingParty'
      @ObjectModel.text.element: ['RENoticeGivingPartyName']
  key cast( dd07t.domvalue_l as retmntprocprty )        as RENoticeGivingParty,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type )  as RENoticeGivingPartyName,
      _RENoticeGivingParty,
      _Language
}
where
      dd07t.domname  = 'RETMNTPROCPRTY'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
