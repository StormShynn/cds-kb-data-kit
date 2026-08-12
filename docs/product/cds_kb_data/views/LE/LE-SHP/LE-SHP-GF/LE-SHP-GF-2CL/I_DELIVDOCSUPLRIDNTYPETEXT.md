---
name: I_DELIVDOCSUPLRIDNTYPETEXT
description: "Delivdocsuplridntypetext"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_DELIVDOCSUPLRIDNTYPETEXT

**Delivdocsuplridntypetext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `ExternalIdentificationType` | ✓ | |  | `cast( left(dd07t.domvalue_l, 1 ) as /spe/de_lifex_type preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `ExternalIdentificationTypeName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_DelivDocSuplrIdnType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Deliv Doc Suplr Idn Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  sapObjectNodeType.name: 'DelivDocSuplrIdnTypeText',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'ExternalIdentificationType',
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
define view entity I_DelivDocSuplrIdnTypeText
  as select from dd07t
  association        to parent I_DelivDocSuplrIdnType as _DelivDocSuplrIdnType on $projection.ExternalIdentificationType = _DelivDocSuplrIdnType.ExternalIdentificationType
  association [0..1] to I_Language                    as _Language             on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                        as Language,

      @ObjectModel.foreignKey.association: '_DelivDocSuplrIdnType'
      @ObjectModel.text.element: ['ExternalIdentificationTypeName']
  key cast( left(dd07t.domvalue_l, 1 ) as /spe/de_lifex_type preserving type ) as ExternalIdentificationType,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                         as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      dd07t.ddtext                                                             as ExternalIdentificationTypeName,

      _Language,
      _DelivDocSuplrIdnType
}
where
      dd07t.domname  = '/SPE/DO_LIFEX_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
