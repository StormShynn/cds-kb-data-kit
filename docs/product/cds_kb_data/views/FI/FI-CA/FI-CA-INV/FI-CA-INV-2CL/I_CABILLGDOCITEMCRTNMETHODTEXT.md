---
name: I_CABILLGDOCITEMCRTNMETHODTEXT
description: "Cabillgdocitemcrtnmethodtext"
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
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGDOCITEMCRTNMETHODTEXT

**Cabillgdocitemcrtnmethodtext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgDocItemCrtnMethod` | ✓ | |  | `cast ( substring( dd07t.domvalue_l,1,2 ) as billitem_crmet_kk preserving type )` |  |  |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type )` |  |  |
| `CABillgDocItemCrtnMethodText` |  | |  | `cast ( ddtext as billitem_crmet_txt_gfn_kk preserving type )` |  |  |
| `_CABillgDocItemCrtnMethod` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocItemCrtnMethod` | `I_CABillgDocItemCrtnMethod` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName: 'ICABILLITMCRMETT'
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Erstell.methode d. Abr.bel.pos. (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgDocItemCrtnMethod',
  sapObjectNodeType.name: 'CABillgDocItmCrtnMethTxt',
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

define view entity I_CABillgDocItemCrtnMethodText
  as select from dd07t
  association [1..1] to I_CABillgDocItemCrtnMethod as _CABillgDocItemCrtnMethod on $projection.CABillgDocItemCrtnMethod = _CABillgDocItemCrtnMethod.CABillgDocItemCrtnMethod
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgDocItemCrtnMethod'
  key cast ( substring( dd07t.domvalue_l,1,2 )  as billitem_crmet_kk preserving type ) as CABillgDocItemCrtnMethod,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type )                                     as Language,
      @Semantics.text
      cast ( ddtext as billitem_crmet_txt_gfn_kk preserving type )                     as CABillgDocItemCrtnMethodText,

      _CABillgDocItemCrtnMethod,
      _Language
}
where
      domname  = 'BILLITEM_CRMET_KK'
  and as4local = 'A'
```
