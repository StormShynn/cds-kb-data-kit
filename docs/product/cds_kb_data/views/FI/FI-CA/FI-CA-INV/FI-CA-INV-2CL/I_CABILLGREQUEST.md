---
name: I_CABILLGREQUEST
description: "Cabillgrequest"
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
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGREQUEST

**Cabillgrequest**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgReqDocument` | ✓ | |  | `billreqno` |  |  |
| `CABillgReqCategory` |  | |  | `billreqcat` |  |  |
| `CABillgReqType` |  | |  | `billreqtype` |  |  |
| `CABillgReqReason` |  | |  | `billreqrsn` |  |  |
| `CAApplicationArea` |  | |  | `applk` |  |  |
| `ContractAccount` |  | |  | `vkont` |  |  |
| `BusinessPartner` |  | |  | `cast(gpart as bu_partner preserving type)` |  |  |
| `CAInvoicingDocument` |  | |  | `inv_ref` |  |  |
| `CABillgReqDescription` |  | |  | `billreq_descr` |  |  |
| `CABillgReqStatus` |  | |  | `billreqstatus` |  |  |
| `CABillgReqTotalAmount` |  | |  | `billreq_total_amt` |  |  |
| `CABillgReqTotalAmountCurrency` |  | |  | `billreq_total_curr` |  |  |
| `CABillgReqTotalAmtTxIsIncluded` |  | |  | `billreq_total_tax_included` |  |  |
| `CABillgReqCreationUser` |  | |  | `crname` |  |  |
| `CABillgReqCreationDate` |  | |  | `crdate` |  |  |
| `CABillgReqCreationTime` |  | |  | `crtime` |  |  |
| `CABillgReqChangeUser` |  | |  | `chname` |  |  |
| `CABillgReqChangeDate` |  | |  | `chdate` |  |  |
| `CABillgReqChangeTime` |  | |  | `chtime` |  |  |
| `CAClrfctnExist` |  | |  | `cfc_exists` |  |  |
| `CABillgReqReference` |  | |  | `reference` |  |  |
| `CABillgReqNumberOfItems` |  | |  | `billreq_recnum` |  |  |
| `LogicalSystem` |  | |  | `log_system` |  |  |
| `CABllbleItmListId` |  | |  | `bitlist_id` |  |  |
| `CADeletionDate` |  | |  | `loedt` |  |  |
| `CABillgReqCompletionDate` |  | |  | `completion_date` |  |  |
| `_CABillgReqStatus` | | ✓ | | | | |
| `_CABillgReqCategory` | | ✓ | | | | |
| `_CABillgReqType` | | ✓ | | | | |
| `_CABillgReqReason` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CABillgReqTotalAmountCurrency` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_ContractAccountHeader` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_CAInvcgDocHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgReqStatus` | `I_CABillgReqStatus` | [0..1] |
| `_CABillgReqCategory` | `I_CABillgReqCategory` | [0..1] |
| `_CABillgReqType` | `I_CABillgReqType` | [0..1] |
| `_CABillgReqReason` | `I_CABillgReqReason` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [0..1] |
| `_CABillgReqTotalAmountCurrency` | `I_Currency` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_ContractAccountHeader` | `I_ContractAccountHeader` | [0..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [0..1] |
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkbix_req_h', 
          role: #MAIN,
          viewElement: ['CABillgReqDocument'],
          tableElement: ['billreqno']
      } ]
    }
  }
}
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CABillgReqDocument',
  sapObjectNodeType.name: 'ContrAcctgBillingRequest',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Billing Request'
define view entity I_CABillgRequest
  as select from dfkkbix_req_h

  association [0..1] to I_CABillgReqStatus       as _CABillgReqStatus              on  $projection.CABillgReqStatus = _CABillgReqStatus.CABillgReqStatus
  association [0..1] to I_CABillgReqCategory     as _CABillgReqCategory            on  $projection.CABillgReqCategory = _CABillgReqCategory.CABillgReqCategory
  association [0..1] to I_CABillgReqType         as _CABillgReqType                on  $projection.CABillgReqType = _CABillgReqType.CABillgReqType
  association [0..1] to I_CABillgReqReason       as _CABillgReqReason              on  $projection.CABillgReqReason = _CABillgReqReason.CABillgReqReason
  association [0..1] to I_CAApplicationArea      as _CAApplicationArea             on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..1] to I_Currency               as _CABillgReqTotalAmountCurrency on  $projection.CABillgReqTotalAmountCurrency = _CABillgReqTotalAmountCurrency.Currency

  association [0..1] to I_BusinessPartner        as _BusinessPartner               on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_ContractAccountHeader  as _ContractAccountHeader         on  $projection.ContractAccount = _ContractAccountHeader.ContractAccount
  association [0..1] to I_ContractAccountPartner as _ContractAccountPartner        on  $projection.ContractAccount = _ContractAccountPartner.ContractAccount
                                                                                   and $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
  association [0..1] to I_CAInvcgDocHeader       as _CAInvcgDocHeader              on  $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument

{
  key billreqno                                 as CABillgReqDocument,
      @ObjectModel.foreignKey.association: '_CABillgReqCategory'
      billreqcat                                as CABillgReqCategory,
      @ObjectModel.foreignKey.association: '_CABillgReqType'
      billreqtype                               as CABillgReqType,
      @ObjectModel.foreignKey.association: '_CABillgReqReason'
      billreqrsn                                as CABillgReqReason,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
      applk                                     as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_ContractAccountHeader'
      vkont                                     as ContractAccount,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      cast(gpart as bu_partner preserving type) as BusinessPartner,
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
      inv_ref                                   as CAInvoicingDocument,
      billreq_descr                             as CABillgReqDescription,
      @ObjectModel.foreignKey.association: '_CABillgReqStatus'
      billreqstatus                             as CABillgReqStatus,
      @Semantics.amount.currencyCode: 'CABillgReqTotalAmountCurrency'
      billreq_total_amt                         as CABillgReqTotalAmount,
      @ObjectModel.foreignKey.association: '_CABillgReqTotalAmountCurrency'
      billreq_total_curr                        as CABillgReqTotalAmountCurrency,
      billreq_total_tax_included                as CABillgReqTotalAmtTxIsIncluded,
      @Semantics.user.createdBy: true
      crname                                    as CABillgReqCreationUser,
      @Semantics.systemDate.createdAt: true
      crdate                                    as CABillgReqCreationDate,
      @Semantics.systemTime.createdAt: true
      crtime                                    as CABillgReqCreationTime,
      @Semantics.user.lastChangedBy: true
      chname                                    as CABillgReqChangeUser,
      @Semantics.systemDate.lastChangedAt: true
      chdate                                    as CABillgReqChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      chtime                                    as CABillgReqChangeTime,
      cfc_exists                                as CAClrfctnExist,
      reference                                 as CABillgReqReference,
      billreq_recnum                            as CABillgReqNumberOfItems,
      log_system                                as LogicalSystem,
      bitlist_id                                as CABllbleItmListId,
      loedt                                     as CADeletionDate,
      completion_date                           as CABillgReqCompletionDate,

      _CABillgReqStatus,
      _CABillgReqCategory,
      _CABillgReqType,
      _CABillgReqReason,
      _CAApplicationArea,
      _CABillgReqTotalAmountCurrency,
      _BusinessPartner,
      _ContractAccountPartner,
      _ContractAccountHeader,
      _CAInvcgDocHeader

}
```
