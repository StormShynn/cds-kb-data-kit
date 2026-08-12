---
name: I_RECONTRACTNOTICEPARTYTEXT
description: "Recontractnoticepartytext"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - text-view
  - contract
  - text
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONTRACTNOTICEPARTYTEXT

**Recontractnoticepartytext**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `REContractNoticeParty` | ✓ | |  | `cast(domvalue_l as recnntparty)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `REContractNoticePartyName` |  | |  | `cast( ddtext as recavdmdesc60 preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_REContractNoticeParty` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Contract Notice given by - Text'
@AbapCatalog.sqlViewName: 'IRECNNTPARTYT'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'REContractNoticeParty'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY                   ]
@VDM.viewType: #BASIC

define view I_REContractNoticePartyText
  as select from dd07t
  association        to parent I_REContractNoticeParty as _REContractNoticeParty on $projection.REContractNoticeParty = _REContractNoticeParty.REContractNoticeParty
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language
{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                      as Language,

      @ObjectModel.foreignKey.association: '_REContractNoticeParty'
      @ObjectModel.text.element: ['REContractNoticePartyName']
  key cast(domvalue_l as recnntparty)                 as REContractNoticeParty,

      @Consumption.hidden: true
      domvalue_l                                      as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( ddtext as recavdmdesc60 preserving type ) as REContractNoticePartyName,
      _REContractNoticeParty,
      _Language

}
where
      domname  = 'RECNNTPARTY'
  and as4local = 'A'
  and as4vers  = '0000'
```
