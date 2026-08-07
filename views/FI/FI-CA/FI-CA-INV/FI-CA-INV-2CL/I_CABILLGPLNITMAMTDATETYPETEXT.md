---
name: I_CABILLGPLNITMAMTDATETYPETEXT
description: Cabillgplnitmamtdatetypetext
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
# I_CABILLGPLNITMAMTDATETYPETEXT

**Cabillgplnitmamtdatetypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CABillgPlnItemAmountDateType` | ✓ | |  | `cast ( substring( dd07t.domvalue_l,1,1 ) as bip_amount_date_type_kk preserving type )` |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type )` |
| `CABillgPlnItmAmtDateTypeText` |  | |  | `cast ( ddtext as bip_amt_date_type_txt_gfn_kk preserving type )` |
| `_CABillgPlnItmAmtDateType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPlnItmAmtDateType` | `I_CABillgPlnItmAmtDateType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ICABIPITMAMTDAT'
@EndUserText.label: 'Abr Pln Art Betr.ermittlungsdatum - Txt'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgPlnItemAmountDateType',
  sapObjectNodeType.name: 'CABillgPlnItmAmtDateTypeTxt',
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

define view entity I_CABillgPlnItmAmtDateTypeText
  as select from dd07t
  association [1..1] to I_CABillgPlnItmAmtDateType as _CABillgPlnItmAmtDateType on $projection.CABillgPlnItemAmountDateType = _CABillgPlnItmAmtDateType.CABillgPlnItemAmountDateType
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgPlnItmAmtDateType'
  key cast ( substring( dd07t.domvalue_l,1,1 ) as bip_amount_date_type_kk preserving type ) as CABillgPlnItemAmountDateType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type )                                          as Language,
      @Semantics.text: true
      cast ( ddtext as bip_amt_date_type_txt_gfn_kk preserving type )                       as CABillgPlnItmAmtDateTypeText,

      _CABillgPlnItmAmtDateType,
      _Language
}
where
      domname  = 'BIP_AMOUNT_DATE_TYPE_KK'
  and as4local = 'A'
```
