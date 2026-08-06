---
name: I_CABILLGPLNITMSTATUSTEXT
description: Cabillgplnitmstatustext
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
  - status
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGPLNITMSTATUSTEXT

**Cabillgplnitmstatustext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABillgPlnItemStatus` | `cast( substring(dd07t.domvalue_l, 1, 1) as bipitem_status_kk preserving type )` |
| key `Language` | `cast( ddlanguage as spras preserving type )` |
| `CABillgPlnItmStatusText` | `cast( ddtext as bipitem_status_txt_gfn_kk preserving type )` |
| `_CABillgPlnItmStatus` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPlnItmStatus` | `I_CABillgPlnItmStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Status der Abrechnungsplanposition Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgPlnItemStatus',
  sapObjectNodeType.name: 'ContrAcctgBillgPlnItmStsText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CABillgPlnItmStatusText
  as select from dd07t
  association [0..1] to I_CABillgPlnItmStatus as _CABillgPlnItmStatus on $projection.CABillgPlnItemStatus = _CABillgPlnItmStatus.CABillgPlnItemStatus
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgPlnItmStatus'
  key cast( substring(dd07t.domvalue_l, 1, 1) as bipitem_status_kk preserving type ) as CABillgPlnItemStatus,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( ddlanguage as spras preserving type )                                    as Language,

      @Semantics.text: true
      cast( ddtext as bipitem_status_txt_gfn_kk preserving type )                    as CABillgPlnItmStatusText,

      //Associations
      _CABillgPlnItmStatus,
      _Language
}

where
      domname  = 'BIPITEM_STATUS_KK'
  and as4local = 'A';
```
