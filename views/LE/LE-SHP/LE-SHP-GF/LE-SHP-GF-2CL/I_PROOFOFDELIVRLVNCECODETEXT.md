---
name: I_PROOFOFDELIVRLVNCECODETEXT
description: Proofofdelivrlvncecodetext
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
  - text
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_PROOFOFDELIVRLVNCECODETEXT

**Proofofdelivrlvncecodetext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |
| `ProofOfDeliveryRelevanceCode` | ✓ | |  | `cast( left(dd07t.domvalue_l, 1 ) as podrel preserving type )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `ProofOfDelivRlvnceCodeName` |  | |  | `ddtext` |
| `_Language` | | ✓ | | |
| `_ProofOfDelivRlvnceCode` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'ProofOfDelivery Relevance Code - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'ProofOfDeliveryRelevanceCode',
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #SEARCHABLE_ENTITY,
                          #SQL_DATA_SOURCE],
  usageType: { serviceQuality: #A,
               dataClass: #META,
               sizeCategory: #S } }
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_ProofOfDelivRlvnceCodeText 
  as select from dd07t
  association        to parent I_ProofOfDelivRlvnceCode as _ProofOfDelivRlvnceCode on $projection.ProofOfDeliveryRelevanceCode = _ProofOfDelivRlvnceCode.ProofOfDeliveryRelevanceCode
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                        as Language,

      @ObjectModel.foreignKey.association: '_ProofOfDelivRlvnceCode'
      @ObjectModel.text.element: ['ProofOfDelivRlvnceCodeName']
  key cast( left(dd07t.domvalue_l, 1 ) as podrel preserving type ) as ProofOfDeliveryRelevanceCode,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                         as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      dd07t.ddtext                                                             as ProofOfDelivRlvnceCodeName,

      _Language,
      _ProofOfDelivRlvnceCode
}
where
      dd07t.domname  = 'PODREL'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
