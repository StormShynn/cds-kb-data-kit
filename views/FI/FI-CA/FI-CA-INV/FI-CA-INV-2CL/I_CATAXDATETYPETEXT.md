---
name: I_CATAXDATETYPETEXT
description: Cataxdatetypetext
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
  - tax
  - text
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CATAXDATETYPETEXT

**Cataxdatetypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CATaxDateType` | ✓ | |  | `cast ( substring( dd07t.domvalue_l, 1, 2 ) as tax_date_type_kk preserving type )` |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type )` |
| `CATaxDateTypeText` |  | |  | `cast ( ddtext as tax_date_type_txt_gfn_kk preserving type )` |
| `_CATaxDateType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CATaxDateType` | `I_CATaxDateType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Art des Steuerdatums (Text)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CATaxDateType',
  sapObjectNodeType.name: 'ContrAcctgTaxDateTypeText',
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

define view entity I_CATaxDateTypeText
  as select from dd07t
  association [1..1] to I_CATaxDateType as _CATaxDateType on $projection.CATaxDateType = _CATaxDateType.CATaxDateType
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CATaxDateType'
  key cast ( substring( dd07t.domvalue_l, 1, 2 ) as tax_date_type_kk preserving type ) as CATaxDateType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type )                                     as Language,

      @Semantics.text: true
      cast ( ddtext as tax_date_type_txt_gfn_kk preserving type )                      as CATaxDateTypeText,

      _CATaxDateType,
      _Language
}
where
      domname  = 'TAX_DATE_TYPE_KK'
  and as4local = 'A'
```
