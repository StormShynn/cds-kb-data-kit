---
name: I_CABILLGPLNITMCATTEXT
description: "Cabillgplnitmcattext"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CABILLGPLNITMCATTEXT

**Cabillgplnitmcattext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgPlnItmCat` | ✓ | |  | `bipitemcat` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `CABillgPlnItmCatText` |  | |  | `cast( text as bipitemcat_txt_gfn_kk preserving type )` |  |  |
| `_CABillgPlnItmCat` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPlnItmCat` | `I_CABillgPlnItmCat` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Typ der Abrechnungsplanposition Texte'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgPlnItmCat',
  sapObjectNodeType.name: 'ContrAcctgBillgPlnItmCatText',
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

define view entity I_CABillgPlnItmCatText
  as select from tfk8212t
  association [0..1] to I_CABillgPlnItmCat as _CABillgPlnItmCat on $projection.CABillgPlnItmCat = _CABillgPlnItmCat.CABillgPlnItmCat
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgPlnItmCat'
  key bipitemcat                                            as CABillgPlnItmCat,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                 as Language,
      @Semantics.text
      cast( text as bipitemcat_txt_gfn_kk preserving type ) as CABillgPlnItmCatText,

      _CABillgPlnItmCat,
      _Language

}
```
