---
name: I_CAINVCGCONTROLOFINVCGUNITTXT
description: Cainvcgcontrolofinvcgunittxt
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
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGCONTROLOFINVCGUNITTXT

**Cainvcgcontrolofinvcgunittxt**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAInvcgControlOfInvoicingUnit` | `cast ( substring( dd07t.domvalue_l,1,1 ) as separate_inv_kk preserving type )` |
| key `Language` | `cast ( ddlanguage as spras preserving type )` |
| `CAInvcgControlOfInvcgUnitTxt` | `cast ( ddtext as separate_inv_txt_gfn_kk preserving type )` |
| `_CAInvcgControlOfInvcgUnit` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgControlOfInvcgUnit` | `I_CAInvcgControlOfInvcgUnit` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ICASEPARATEINVT'
@EndUserText.label: 'Steuerung der Fakt.seinheit (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgControlOfInvoicingUnit',
  sapObjectNodeType.name: 'CAInvcgCtrlOfInvcgUnitText',
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

define view entity I_CAInvcgControlOfInvcgUnitTxt
  as select from dd07t
  association [1..1] to I_CAInvcgControlOfInvcgUnit as _CAInvcgControlOfInvcgUnit on $projection.CAInvcgControlOfInvoicingUnit = _CAInvcgControlOfInvcgUnit.CAInvcgControlOfInvoicingUnit
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgControlOfInvcgUnit'
  key cast ( substring( dd07t.domvalue_l,1,1 )  as separate_inv_kk preserving type ) as CAInvcgControlOfInvoicingUnit,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type )                                   as Language,
      @Semantics.text
      cast ( ddtext as separate_inv_txt_gfn_kk preserving type )                     as CAInvcgControlOfInvcgUnitTxt,

      _CAInvcgControlOfInvcgUnit,
      _Language
}
where
      domname  = 'SEPARATE_INV_KK'
  and as4local = 'A'
```
