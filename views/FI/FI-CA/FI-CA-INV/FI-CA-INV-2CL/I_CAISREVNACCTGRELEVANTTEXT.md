---
name: I_CAISREVNACCTGRELEVANTTEXT
description: Caisrevnacctgrelevanttext
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - text-view
  - text
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAISREVNACCTGRELEVANTTEXT

**Caisrevnacctgrelevanttext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAIsRevenueAccountingRelevant` | ✓ | |  | `cast ( substring( dd07t.domvalue_l,1,1 ) as rarel_kk preserving type )` |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type)` |
| `CAIsRevnAcctgRelevantText` |  | |  | `cast ( ddtext as rarel_det_type_txt_gfn_kk preserving type )` |
| `_CAIsRevnAcctgRelevant` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAIsRevnAcctgRelevant` | `I_CAIsRevnAcctgRelevant` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Relevant für Erlösbuchhaltung (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAIsRevenueAccountingRelevant',
  sapObjectNodeType.name: 'ContrAcctgIsRevnAcctgRlvtText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CAIsRevnAcctgRelevantText
  as select from dd07t
  association [1..1] to I_CAIsRevnAcctgRelevant as _CAIsRevnAcctgRelevant on $projection.CAIsRevenueAccountingRelevant = _CAIsRevnAcctgRelevant.CAIsRevenueAccountingRelevant
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAIsRevnAcctgRelevant'
      @Semantics.booleanIndicator
  key cast ( substring( dd07t.domvalue_l,1,1 ) as rarel_kk preserving type ) as CAIsRevenueAccountingRelevant,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type)                            as Language,
      @Semantics.text
      cast ( ddtext as rarel_det_type_txt_gfn_kk preserving type )                    as CAIsRevnAcctgRelevantText,

      _CAIsRevnAcctgRelevant,
      _Language
}
where
      domname  = 'RAREL_KK'
  and as4local = 'A'
```
