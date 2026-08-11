---
name: I_CABUSINESSTRANSACTION
description: "Contract Accounting Business Transaction"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABUSINESSTRANSACTION')/$value
semantic_en: "Contract Accounting Business Transaction"
semantic_vi: "Contract Accounting Business Transaction — CDS view giao diện (transactional data) dựa trên dfkkevl."
keywords:
  - "contract"
  - "accounting"
  - "business"
  - "transaction"
  - "creation"
  - "date"
  - "time"
  - "created"
  - "user"
  - "area"
  - "parallelization"
tags:
  - FI
  - account
  - component:FI-CA-2CL
  - contract
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - transaction
---
# I_CABUSINESSTRANSACTION

**Contract Accounting Business Transaction**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABUSINESSTRANSACTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABusinessTransactionUUID` | ✓ | |  | `guid` | `RAW(16)` | Globally Unique Identifier |
| `CreationDate` |  | |  | `cast(erdat as erdat_bt preserving type)` | `DATS(8)` | Date on Which Record Was Created |
| `CreationTime` |  | |  | `cast(ertim as ttet_dt_cr_time preserving type)` | `TIMS(6)` | Creation Time |
| `CreatedByUser` |  | |  | `cast(ernam as vdm_createdbyuserid preserving type)` | `CHAR(12)` | Created By User |
| `CASubAreaForParallelization` | ✓ | |  | `keypp` | `NUMC(3)` | Subarea for Parallelization in Mass Processing |
| `CABusinessTransactionObject` |  | |  | `cast (objid as objid_bt preserving type)` | `CHAR(8)` | Business Transaction: Object Identification |
| `CABusinessTransactionActivity` |  | |  | `cast (actid as actid_bt preserving type)` | `CHAR(4)` | Business Transaction: Activity |
| `CABusinessTransactionName` |  | |  | `cast('' as event_bt_txt)` | `CHAR(80)` | Description |
| `BusinessPartner` |  | |  | `cast(gpart as bu_partner preserving type)` | `CHAR(10)` | Business Partner Number |
| `ContractAccount` |  | |  | `cast( vkont as vkont_gfn_kk preserving type)` | `CHAR(12)` | Contract Account |
| `CAContract` |  | |  | `cast(vtref as vtref_kk preserving type)` | `CHAR(20)` | Reference Specifications from Contract |
| `CASubApplication` |  | |  | `subap` | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `OriginalReferenceDocument` |  | |  | `cast(awkey as fac_awkey_bt preserving type)` | `CHAR(20)` | Reference Key |
| `ReferenceDocumentType` |  | |  | `cast(awtyp as fis_awtyp preserving type)` | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentLogicalSystem` |  | |  | `cast(awsys as fis_awsys preserving type)` | `CHAR(10)` | Logical System of Reference Document |
| `LogicalSystem` |  | |  | `cast(logsys as logsystem preserving type)` | `CHAR(10)` | Logical System |
| `CABusTransExternalReference` |  | |  | `xtref` | `CHAR(32)` | Business Transaction: External Reference |
| `CAMassRunDate` |  | |  | `case when objid = '00000303' then cast(substring(xtref,1, 8) as laufd_kk) end` | `DATS(8)` | Date ID |
| `CAMassRunID` |  | |  | `case when objid = '00000303' then cast(substring(xtref, 13, 6) as laufi_kk) end` | `CHAR(6)` | Run ID |
| `CABusinessTransactionProcess` |  | |  | `proid` | `CHAR(8)` | Business Transaction: Process Identification |
| `CABusTransProcessName` |  | |  | `text` | `CHAR(50)` | Text Field |
| `CABusTransDocumentType` |  | |  | `doc1t` | `CHAR(4)` | Business Transaction: Document Category |
| `CADocumentNumber` |  | |  | `case when objid = '00000303' or objid = '00000302' then cast(substring(doc1r, 1, 12)as opbel_bt_kk preserving type) end` | `CHAR(12)` | Document |
| `CABusTransDocument` |  | |  | `cast(doc1r as doclr_bt preserving type)` | `CHAR(24)` | Document |
| `CARepetitionItemNumber` |  | |  | `case when objid = '00000303' or objid = '00000302' then cast(substring(doc1r, 13 ,3) as opupw_kk) end` | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABPItemNumber` |  | |  | `case when objid = '00000303' or objid = '00000302' then cast(substring(doc1r, 16 ,4)as opupk_kk) end` | `NUMC(4)` | Item Number in FI-CA Document |
| `CASubItemNumber` |  | |  | `case when objid = '00000303' or objid = '00000302' then cast(substring(doc1r, 20 ,3 )as opupz_kk) end` | `NUMC(3)` | Subitem for a Partial Clearing in Document |
| `CAReferenceDocument` |  | |  | `xblnr` | `CHAR(16)` | Reference Document Number |
| `CAClassificationKey` |  | |  | `opord` | `CHAR(35)` | Classification Key |
| `CADocumentOriginCode` |  | |  | `herkf` | `CHAR(2)` | Document Origin Key |
| `CAPostingDate` |  | |  | `budat` | `DATS(8)` | Posting Date in the Document |
| `CAClearingReason` |  | |  | `augrd` | `CHAR(2)` | Clearing Reason |
| `CAMainTransaction` |  | |  | `hvorg` | `CHAR(4)` | Main Transaction for Line Item |
| `CASubTransaction` |  | |  | `tvorg` | `CHAR(4)` | Subtransaction for Document Item |
| `CAStatisticalItemCode` |  | |  | `stakz` | `CHAR(1)` | Type of Statistical Line Item |
| `CompanyCode` |  | |  | `cast( bukrs as fis_bukrs preserving type)` | `CHAR(4)` | Company Code |
| `Segment` |  | |  | `cast( segment as fb_segment preserving type)` | `CHAR(10)` | Segment for Segmental Reporting |
| `BusinessArea` |  | |  | `cast( gsber as fis_rbusa preserving type)` | `CHAR(4)` | Business Area |
| `LedgerGroup` |  | |  | `cast( ldgrp as fagl_ldgrp preserving type)` | `CHAR(4)` | Ledger Group |
| `CABusTransRelationship` |  | |  | `objrl` | `CHAR(2)` | Relation between Objects |
| `CABusTransRelatedObject` |  | |  | `objky` | `CHAR(40)` | Master Data Object Key |
| `CACorrespondenceType` |  | |  | `cotyp` | `CHAR(4)` | Correspondence Type |
| `CorrespondenceKey` |  | |  | `cast(cokey as cokey_bt_kk preserving type)` | `CHAR(36)` | Correspondence Key |
| `CorrespondencePrintDate` |  | |  | `copri` | `DATS(8)` | Print Date |
| `Currency` |  | |  | `cast(waers as waers preserving type)` | `CUKY(5)` | Currency Key |
| `CAAmountInTransactionCurrency` |  | |  | `cast(betrw as betrw_kk preserving type)` | `CURR(13)` | Amount in Transaction Currency with +/- Sign |
| `CAPaymentExceptionReason` |  | |  | `poken_pay` | `NUMC(3)` | Item Indicator in Payment Program |
| `CADunningExceptionReason` |  | |  | `poken_dun` | `NUMC(3)` | Item Indicator in Dunning Run |
| `CAReceivableAdjustmentReason` |  | |  | `cast(grund as grund_bt_kk preserving type)` | `CHAR(2)` | Adjustment Reason |
| `CAPromiseToPayReason` |  | |  | `pprsc` | `CHAR(2)` | Reason for Promise to Pay |
| `CAPromiseToPayWthdrwlReason` |  | |  | `cast(pprsw as pprsw_bt_kk preserving type)` | `CHAR(2)` | Reason for Withdrawal of Promise to Pay |
| `CAInstlmntPlanDactvtnRsn` |  | |  | `deagd` | `CHAR(2)` | Deactivation Reason |
| `_BusinessPartner` | | ✓ | | | | |
| `_CABusTransActivity` | | ✓ | | | | |
| `_CABusTransDocumentType` | | ✓ | | | | |
| `_CABusTransObject` | | ✓ | | | | |
| `_CABusTransProcess` | | ✓ | | | | |
| `_CABusTransRelationship` | | ✓ | | | | |
| `_CAClearingReason` | | ✓ | | | | |
| `_CACorrespondenceType` | | ✓ | | | | |
| `_CADocumentOriginCode` | | ✓ | | | | |
| `_CADunningExceptionReason` | | ✓ | | | | |
| `_CAInstlmntPlanDactvtnRsn` | | ✓ | | | | |
| `_CAPaymentExceptionReason` | | ✓ | | | | |
| `_CAPromiseToPayReason` | | ✓ | | | | |
| `_CAPromiseToPayWthdrwlReason` | | ✓ | | | | |
| `_CAReceivableAdjustmentReason` | | ✓ | | | | |
| `_CAStatisticalItemCode` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_ContractAccount` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_CABusTransActivity` | `I_CABusTransActivity` | [0..1] |
| `_CABusTransDocumentType` | `I_CABusTransDocumentType` | [0..1] |
| `_CABusTransObject` | `I_CABusTransObject` | [0..1] |
| `_CABusTransProcess` | `I_CABusTransProcess` | [0..1] |
| `_CABusTransRelationship` | `I_CABusTransRelationship` | [0..1] |
| `_CAClearingReason` | `I_CAClearingReason` | [0..1] |
| `_CACorrespondenceType` | `I_CACorrespondenceType` | [0..1] |
| `_CADocumentOriginCode` | `I_CADocumentOriginCode` | [0..1] |
| `_CADunningExceptionReason` | `I_CADunningExceptionReason` | [0..1] |
| `_CAInstlmntPlanDactvtnRsn` | `I_CAInstlmntPlanDactvtnRsn` | [0..1] |
| `_CAPaymentExceptionReason` | `I_CAPaymentExceptionReason` | [0..1] |
| `_CAPromiseToPayReason` | `I_CAPromiseToPayReason` | [0..1] |
| `_CAPromiseToPayWthdrwlReason` | `I_CAPromiseToPayWthdrwlReason` | [0..1] |
| `_CAReceivableAdjustmentReason` | `I_CAReceivableAdjustmentReason` | [0..1] |
| `_CAStatisticalItemCode` | `I_CAStatisticalItemCode` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_ContractAccount` | `I_ContractAccountHeader` | [1..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [1..1] |
| `_ProviderContract` | `I_CAProviderContractHeader` | [0..1] |
| `_Currency` | `I_Currency` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABUSINESSTRANSACTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABUSINESSTRANSACTION')/$value)*

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@EndUserText.label: 'Contract Accounting Business Transaction'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CABusinessTransactionUUID',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #A,
                             sizeCategory: #XXL } }

@VDM.viewType: #BASIC

define view entity I_CABusinessTransaction
  as select from dfkkevl

  association [1..1] to I_BusinessPartner              as _BusinessPartner              on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_CABusTransActivity           as _CABusTransActivity           on  $projection.CABusinessTransactionActivity = _CABusTransActivity.CABusinessTransactionActivity
  association [0..1] to I_CABusTransDocumentType       as _CABusTransDocumentType       on  $projection.CABusTransDocumentType = _CABusTransDocumentType.CABusTransDocumentType
  association [0..1] to I_CABusTransObject             as _CABusTransObject             on  $projection.CABusinessTransactionObject = _CABusTransObject.CABusinessTransactionObject
  association [0..1] to I_CABusTransProcess            as _CABusTransProcess            on  $projection.CABusinessTransactionProcess = _CABusTransProcess.CABusinessTransactionProcess
  association [0..1] to I_CABusTransRelationship       as _CABusTransRelationship       on  $projection.CABusTransRelationship = _CABusTransRelationship.CABusTransRelationship
  association [0..1] to I_CAClearingReason             as _CAClearingReason             on  $projection.CAClearingReason = _CAClearingReason.CAClearingReason
  association [0..1] to I_CACorrespondenceType         as _CACorrespondenceType         on  $projection.CACorrespondenceType = _CACorrespondenceType.CACorrespondenceType
  association [0..1] to I_CADocumentOriginCode         as _CADocumentOriginCode         on  $projection.CADocumentOriginCode = _CADocumentOriginCode.CADocumentOriginCode
  association [0..1] to I_CADunningExceptionReason     as _CADunningExceptionReason     on  $projection.CADunningExceptionReason = _CADunningExceptionReason.CADunningExceptionReason
  association [0..1] to I_CAInstlmntPlanDactvtnRsn     as _CAInstlmntPlanDactvtnRsn     on  $projection.CAInstlmntPlanDactvtnRsn = _CAInstlmntPlanDactvtnRsn.CAInstlmntPlanDactvtnRsn
  association [0..1] to I_CAPaymentExceptionReason     as _CAPaymentExceptionReason     on  $projection.CAPaymentExceptionReason = _CAPaymentExceptionReason.CAPaymentExceptionReason
  association [0..1] to I_CAPromiseToPayReason         as _CAPromiseToPayReason         on  $projection.CAPromiseToPayReason = _CAPromiseToPayReason.CAPromiseToPayReason
  association [0..1] to I_CAPromiseToPayWthdrwlReason  as _CAPromiseToPayWthdrwlReason  on  $projection.CAPromiseToPayWthdrwlReason = _CAPromiseToPayWthdrwlReason.CAPromiseToPayWthdrwlReason
  association [0..1] to I_CAReceivableAdjustmentReason as _CAReceivableAdjustmentReason on  $projection.CAReceivableAdjustmentReason = _CAReceivableAdjustmentReason.CAReceivableAdjustmentReason
  association [0..1] to I_CAStatisticalItemCode        as _CAStatisticalItemCode        on  $projection.CAStatisticalItemCode = _CAStatisticalItemCode.CAStatisticalItemCode
  association [0..1] to I_CASubApplication             as _CASubApplication             on  $projection.CASubApplication = _CASubApplication.CASubApplication
  association [1..1] to I_ContractAccountHeader        as _ContractAccount              on  $projection.ContractAccount = _ContractAccount.ContractAccount
  association [1..1] to I_ContractAccountPartner       as _ContractAccountPartner       on  $projection.ContractAccount = _ContractAccountPartner.ContractAccount
                                                                                        and $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
  association [0..1] to I_CAProviderContractHeader     as _ProviderContract             on  $projection.CASubApplication = 'P'
                                                                                        and $projection.CAContract       = _ProviderContract.CAProviderContract
  association [1..1] to I_Currency                     as _Currency                     on  $projection.Currency = _Currency.Currency
{

  key guid                                               as CABusinessTransactionUUID,

      // Admin Data
      cast(erdat as erdat_bt preserving type)            as CreationDate,
      cast(ertim as ttet_dt_cr_time preserving type)     as CreationTime,
      cast(ernam as vdm_createdbyuserid preserving type) as CreatedByUser,
      keypp                                              as CASubAreaForParallelization,

      // Object and Activity
      @ObjectModel.foreignKey.association: '_CABusTransObject'
      cast (objid as objid_bt preserving type)           as CABusinessTransactionObject,
      @ObjectModel.foreignKey.association: '_CABusTransActivity'
      cast (actid as actid_bt preserving type)           as CABusinessTransactionActivity,
      cast('' as event_bt_txt)                           as CABusinessTransactionName,

      // Master Data
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      cast(gpart as bu_partner preserving type)          as BusinessPartner,
      @ObjectModel.foreignKey.association: '_ContractAccount'
      cast( vkont as vkont_gfn_kk preserving type)       as ContractAccount,
      cast(vtref as vtref_kk preserving type)            as CAContract,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                                              as CASubApplication,

      // Data of External Caller
      cast(awkey as fac_awkey_bt preserving type)        as OriginalReferenceDocument,
      cast(awtyp as fis_awtyp preserving type)           as ReferenceDocumentType,
      cast(awsys as fis_awsys preserving type)           as ReferenceDocumentLogicalSystem,
      cast(logsys as logsystem preserving type)          as LogicalSystem,
      xtref                                              as CABusTransExternalReference,
      case
         when objid = '00000303'
         then cast(substring(xtref,1, 8) as laufd_kk)
         end                                             as CAMassRunDate,

      case
        when objid = '00000303'
        then cast(substring(xtref, 13, 6) as laufi_kk)
        end                                              as CAMassRunID,

      // Process Identification
      @ObjectModel.foreignKey.association: '_CABusTransProcess'
      proid                                              as CABusinessTransactionProcess,
      text                                               as CABusTransProcessName,

      // Posting Data
      @ObjectModel.foreignKey.association: '_CABusTransDocumentType'
      doc1t                                              as CABusTransDocumentType,
      case
        when objid = '00000303' or objid = '00000302'
        then cast(substring(doc1r, 1, 12)as opbel_bt_kk preserving type)
        end                                              as CADocumentNumber,

      cast(doc1r as doclr_bt preserving type)            as CABusTransDocument,
      case
        when objid = '00000303' or objid = '00000302'
        then cast(substring(doc1r, 13 ,3) as opupw_kk)
        end                                              as CARepetitionItemNumber,

      case
         when objid = '00000303' or objid = '00000302'
         then cast(substring(doc1r, 16 ,4)as opupk_kk)
         end                                             as CABPItemNumber,

      case
         when objid = '00000303' or objid = '00000302'
         then cast(substring(doc1r, 20 ,3 )as opupz_kk)
         end                                             as CASubItemNumber,

      xblnr                                              as CAReferenceDocument,
      opord                                              as CAClassificationKey,
      @ObjectModel.foreignKey.association: '_CADocumentOriginCode'
      herkf                                              as CADocumentOriginCode,
      budat                                              as CAPostingDate,
      @ObjectModel.foreignKey.association: '_CAClearingReason'
      augrd                                              as CAClearingReason,
      hvorg                                              as CAMainTransaction,
      tvorg                                              as CASubTransaction,
      @ObjectModel.foreignKey.association: '_CAStatisticalItemCode'
      stakz                                              as CAStatisticalItemCode,
      cast( bukrs as fis_bukrs preserving type)          as CompanyCode,
      cast( segment as fb_segment preserving type)       as Segment,
      cast( gsber as fis_rbusa preserving type)          as BusinessArea,
      cast( ldgrp as fagl_ldgrp preserving type)         as LedgerGroup,
      
      // Object Relation
      @ObjectModel.foreignKey.association: '_CABusTransRelationship'
      objrl                                              as CABusTransRelationship,
      objky                                              as CABusTransRelatedObject,
      
      // Correspondence
      @ObjectModel.foreignKey.association: '_CACorrespondenceType'
      cotyp                                              as CACorrespondenceType,
      cast(cokey as cokey_bt_kk preserving type)         as CorrespondenceKey,
      copri                                              as CorrespondencePrintDate,
      
      // Amount
      @ObjectModel.foreignKey.association: '_Currency'
      cast(waers as waers preserving type)               as Currency,
      @Semantics.amount.currencyCode:'Currency'
      cast(betrw as betrw_kk preserving type)            as CAAmountInTransactionCurrency,
      
      // Pay and Dunning Exemption
      @ObjectModel.foreignKey.association: '_CAPaymentExceptionReason'
      poken_pay                                          as CAPaymentExceptionReason,
      @ObjectModel.foreignKey.association: '_CADunningExceptionReason'
      poken_dun                                          as CADunningExceptionReason,
      
      // Doubtful Receivable
      @ObjectModel.foreignKey.association: '_CAReceivableAdjustmentReason'
      cast(grund as grund_bt_kk preserving type)         as CAReceivableAdjustmentReason,
      
      // Promise to Pay
      @ObjectModel.foreignKey.association: '_CAPromiseToPayReason'
      pprsc                                              as CAPromiseToPayReason,
      @ObjectModel.foreignKey.association: '_CAPromiseToPayWthdrwlReason'
      cast(pprsw as pprsw_bt_kk preserving type)         as CAPromiseToPayWthdrwlReason,
      
      // Installment Plan
      @ObjectModel.foreignKey.association: '_CAInstlmntPlanDactvtnRsn'
      deagd                                              as CAInstlmntPlanDactvtnRsn,


      // propagation of associations
      _BusinessPartner,
      _CABusTransActivity,
      _CABusTransDocumentType,
      _CABusTransObject,
      _CABusTransProcess,
      _CABusTransRelationship,
      _CAClearingReason,
      _CACorrespondenceType,
      _CADocumentOriginCode,
      _CADunningExceptionReason,
      _CAInstlmntPlanDactvtnRsn,
      _CAPaymentExceptionReason,
      _CAPromiseToPayReason,
      _CAPromiseToPayWthdrwlReason,
      _CAReceivableAdjustmentReason,
      _CAStatisticalItemCode,
      _CASubApplication,
      _ContractAccount,
      _ContractAccountPartner,
      _Currency,
      _ProviderContract

}
```
