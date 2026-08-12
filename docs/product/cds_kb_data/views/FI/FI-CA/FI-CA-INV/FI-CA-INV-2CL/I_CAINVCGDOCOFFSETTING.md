---
name: I_CAINVCGDOCOFFSETTING
description: "Cainvcgdocoffsetting"
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
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCOFFSETTING

**Cainvcgdocoffsetting**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvoicingDocument` | ✓ | |  | `invdocno` |  |  |
| `CAInvcgDocOffsettingItem` | ✓ | |  | `invdocoitem` |  |  |
| `CAInvcgOffsettingReferenceKey` |  | |  | `offset_refid` |  |  |
| `CAInvcgOffsettingCategory` |  | |  | `offset_cat` |  |  |
| `CAInvcgOffsettingProcedure` |  | |  | `offset_proc` |  |  |
| `CAInvcgOffsettingGroup` |  | |  | `offset_invgr` |  |  |
| `CAInvcgOffsettingStatus` |  | |  | `offset_status` |  |  |
| `CAContract` |  | |  | `vtref` |  |  |
| `CAProviderContractItemNumber` |  | |  | `vtpos` |  |  |
| `CASubApplication` |  | |  | `subap` |  |  |
| `CAInvcgDocumentReqd` |  | |  | `invdocno_req` |  |  |
| `CAItemReqdPeriodStartDate` |  | |  | `date_from_req` |  |  |
| `CAItemReqdPeriodEndDate` |  | |  | `date_to_req` |  |  |
| `CADocumentNumberReqd` |  | |  | `cast(opbel_req as opbel_gfn_kk preserving type )` |  |  |
| `CARepetitionItemNumberReqd` |  | |  | `opupw_req` |  |  |
| `CABusinessPartnerItemNmbrReqd` |  | |  | `opupk_req` |  |  |
| `_CAInvcgDocHeader` | | ✓ | | | | |
| `_CAInvcgOffsettingCategory` | | ✓ | | | | |
| `_CAInvcgOffsettingProcedure` | | ✓ | | | | |
| `_CAInvcgOffsettingStatus` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_CAInvcgDocumentReqd` | | ✓ | | | | |
| `_CADocumentNumberReqd` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [1..1] |
| `_CAInvcgOffsettingCategory` | `I_CAInvcgOffsettingCategory` | [0..1] |
| `_CAInvcgOffsettingProcedure` | `I_CAInvcgOffsettingProcedure` | [0..1] |
| `_CAInvcgOffsettingStatus` | `I_CAInvcgOffsettingStatus` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CAInvcgDocumentReqd` | `I_CAInvcgDocHeader` | [1..1] |
| `_CADocumentNumberReqd` | `I_CADocument` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fakt.bel. Anrechnungspositionen'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CAInvcgDocOffsettingItem',
  sapObjectNodeType.name: 'ContrAcctgInvcgDocOffstgItem',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_CAInvcgDocOffsetting
  as select from dfkkinvdoc_o
  association [1..1] to I_CAInvcgDocHeader           as _CAInvcgDocHeader           on $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument
  association [0..1] to I_CAInvcgOffsettingCategory  as _CAInvcgOffsettingCategory  on $projection.CAInvcgOffsettingCategory = _CAInvcgOffsettingCategory.CAInvcgOffsettingCategory
  association [0..1] to I_CAInvcgOffsettingProcedure as _CAInvcgOffsettingProcedure on $projection.CAInvcgOffsettingProcedure = _CAInvcgOffsettingProcedure.CAInvcgOffsettingProcedure
  association [0..1] to I_CAInvcgOffsettingStatus    as _CAInvcgOffsettingStatus    on $projection.CAInvcgOffsettingStatus = _CAInvcgOffsettingStatus.CAInvcgOffsettingStatus
  association [0..1] to I_CASubApplication           as _CASubApplication           on $projection.CASubApplication = _CASubApplication.CASubApplication

  association [1..1] to I_CAInvcgDocHeader           as _CAInvcgDocumentReqd        on $projection.CAInvcgDocumentReqd = _CAInvcgDocumentReqd.CAInvoicingDocument
  association [1..1] to I_CADocument                 as _CADocumentNumberReqd       on $projection.CADocumentNumberReqd = _CADocumentNumberReqd.CADocumentNumber

{
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
  key invdocno                                         as CAInvoicingDocument,
  key invdocoitem                                      as CAInvcgDocOffsettingItem,
      offset_refid                                     as CAInvcgOffsettingReferenceKey,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingCategory'
      offset_cat                                       as CAInvcgOffsettingCategory,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingProcedure'
      offset_proc                                      as CAInvcgOffsettingProcedure,
      offset_invgr                                     as CAInvcgOffsettingGroup,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingStatus'
      offset_status                                    as CAInvcgOffsettingStatus,
      vtref                                            as CAContract,
      vtpos                                            as CAProviderContractItemNumber,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                                            as CASubApplication,
      @ObjectModel.foreignKey.association: '_CAInvcgDocumentReqd'
      invdocno_req                                     as CAInvcgDocumentReqd,
      date_from_req                                    as CAItemReqdPeriodStartDate,
      date_to_req                                      as CAItemReqdPeriodEndDate,
      @ObjectModel.foreignKey.association: '_CADocumentNumberReqd'
      cast(opbel_req as opbel_gfn_kk preserving type ) as CADocumentNumberReqd,
      opupw_req                                        as CARepetitionItemNumberReqd,
      opupk_req                                        as CABusinessPartnerItemNmbrReqd,

      // associations
      _CAInvcgDocHeader,
      _CAInvcgOffsettingCategory,
      _CAInvcgOffsettingProcedure,
      _CAInvcgOffsettingStatus,
      _CASubApplication,
      _CAInvcgDocumentReqd,
      _CADocumentNumberReqd
}
```
