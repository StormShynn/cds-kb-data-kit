---
name: I_CAINVCGDOCITMCRTNMETHODTEXT
description: "Cainvcgdocitmcrtnmethodtext"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CAINVCGDOCITMCRTNMETHODTEXT

**Cainvcgdocitmcrtnmethodtext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgDocItemCrtnMethod` | ✓ | |  | `cast ( substring( dd07t.domvalue_l,1,1 ) as invitem_crmet_kk preserving type )` |  |  |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type )` |  |  |
| `CAInvcgDocItmCrtnMethodText` |  | |  | `cast ( ddtext as invitem_crmet_txt_gfn_kk preserving type )` |  |  |
| `_CAInvcgDocItmCrtnMethod` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocItmCrtnMethod` | `I_CAInvcgDocItmCrtnMethod` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ICAINVITEMCRMETT'
@EndUserText.label: 'Erstellungsmethode der Fakturapos. - Txt'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgDocItemCrtnMethod',
  sapObjectNodeType.name: 'CAInvcgDocItmCrtnMethTxt',
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

define view entity I_CAInvcgDocItmCrtnMethodText
  as select from dd07t
  association [1..1] to I_CAInvcgDocItmCrtnMethod as _CAInvcgDocItmCrtnMethod on $projection.CAInvcgDocItemCrtnMethod = _CAInvcgDocItmCrtnMethod.CAInvcgDocItemCrtnMethod
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgDocItmCrtnMethod'
  key cast ( substring( dd07t.domvalue_l,1,1 ) as invitem_crmet_kk preserving type ) as CAInvcgDocItemCrtnMethod,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type )                                   as Language,
      @Semantics.text
      cast ( ddtext as invitem_crmet_txt_gfn_kk preserving type )                    as CAInvcgDocItmCrtnMethodText,

      _CAInvcgDocItmCrtnMethod,
      _Language
}
where
      domname  = 'INVITEM_CRMET_KK'
  and as4local = 'A'
```
