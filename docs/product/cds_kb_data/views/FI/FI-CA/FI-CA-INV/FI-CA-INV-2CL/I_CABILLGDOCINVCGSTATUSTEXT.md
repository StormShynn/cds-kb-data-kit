---
name: I_CABILLGDOCINVCGSTATUSTEXT
description: "Cabillgdocinvcgstatustext"
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
  - status
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGDOCINVCGSTATUSTEXT

**Cabillgdocinvcgstatustext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `CABillgDocumentInvcgStatus` | ✓ | |  | `cast( dd07t.domvalue_l as invstatus_kk )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `CABillgDocumentInvcgStatusText` |  | |  | `cast( dd07t.ddtext as invstatus_txt_gfn_kk preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_CABillgDocInvcgStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Fakturierungsstatus für Abr.bel. (Text)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgDocumentInvcgStatus',
  sapObjectNodeType.name: 'ContrAcctgBillgDocInvcgStsText',
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
@Search.searchable: true
@VDM.viewType: #BASIC

define view entity I_CABillgDocInvcgStatusText
  as select from dd07t
  association        to parent I_CABillgDocInvcgStatus as _CABillgDocInvcgStatus on $projection.CABillgDocumentInvcgStatus = _CABillgDocInvcgStatus.CABillgDocumentInvcgStatus
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )            as Language,

      @ObjectModel.foreignKey.association: '_CABillgDocInvcgStatus'
      @ObjectModel.text.element: ['CABillgDocumentInvcgStatusText']
  key cast( dd07t.domvalue_l as invstatus_kk )                     as CABillgDocumentInvcgStatus,

      @Consumption.hidden: true
      dd07t.domvalue_l                                             as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as invstatus_txt_gfn_kk preserving type ) as CABillgDocumentInvcgStatusText,

      _CABillgDocInvcgStatus,
      _Language
}
where
      dd07t.domname  = 'INVSTATUS_KK'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
