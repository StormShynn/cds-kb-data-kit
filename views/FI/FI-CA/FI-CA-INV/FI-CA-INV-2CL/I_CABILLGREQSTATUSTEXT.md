---
name: I_CABILLGREQSTATUSTEXT
description: "Cabillgreqstatustext"
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
# I_CABILLGREQSTATUSTEXT

**Cabillgreqstatustext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgReqStatus` | ✓ | |  | `cast ( substring( dd07t.domvalue_l,1,1 ) as billreqstatus_kk preserving type )` |  |  |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type )` |  |  |
| `CABillgReqStatusText` |  | |  | `cast ( ddtext as descr_60_kk preserving type )` |  |  |
| `_CABillgReqStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgReqStatus` | `I_CABillgReqStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Quellbelegpositionstyp (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgReqStatus',
  sapObjectNodeType.name: 'ContrAcctgBillingReqStatusText',
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

define view entity I_CABillgReqStatusText
  as select from dd07t
  association [0..1] to I_CABillgReqStatus as _CABillgReqStatus on $projection.CABillgReqStatus = _CABillgReqStatus.CABillgReqStatus
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_CABillgReqStatus'
  key cast ( substring( dd07t.domvalue_l,1,1 ) as billreqstatus_kk preserving type ) as CABillgReqStatus,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type )                                   as Language,

      @ObjectModel.sort.enabled: false
      @Semantics.text: true
      cast ( ddtext as descr_60_kk preserving type )                                 as CABillgReqStatusText,

      _CABillgReqStatus,
      _Language
}
where
      domname  = 'BILLREQSTATUS_KK'
  and as4local = 'A'
```
