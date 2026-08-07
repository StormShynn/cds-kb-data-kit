---
name: I_CREDITBLOCKEDSALESDOCUMENT
description: Creditblockedsalesdocument
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-CM
  - interface-view
  - sales-document
  - document
  - credit
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
---
# I_CREDITBLOCKEDSALESDOCUMENT

**Creditblockedsalesdocument**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocument` | ✓ | |  |  |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `SalesDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `CustomerCreditAccount` |  | |  |  |  |  |
| `ReleasedCreditAmount` |  | |  |  |  |  |
| `ControllingAreaCurrency` |  | |  |  |  |  |
| `CreditBlockReleaseDate` |  | |  |  |  |  |
| `NextShippingDate` |  | |  |  |  |  |
| `NextCreditCheckDate` |  | |  |  |  |  |
| `SalesDocumentRjcnReason` |  | |  | `cast( ' ' as abgru_va )` |  |  |
| `FinDocCreditCheckStatus` |  | |  |  |  |  |
| `TotalCreditCheckStatus` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `CentralCreditCheckStatus` |  | |  |  |  |  |
| `CentralCreditChkTechErrSts` |  | |  |  |  |  |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_SalesDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_FinDocCreditCheckStatus` | | ✓ | | | | |
| `_TotalCreditCheckStatus` | | ✓ | | | | |
| `_OverallSDProcessStatus` | | ✓ | | | | |
| `_CentralCreditCheckStatus` | | ✓ | | | | |
| `_CentralCreditChkTechErrSts` | | ✓ | | | | |
| `_CustomerCreditAccount` | | ✓ | | | | |
| `_ControllingAreaCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_SalesDocumentRjcnReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_SalesDocumentType` | `I_SalesDocumentType` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_OrganizationDivision` | `I_Division` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_SalesGroup` | `I_SalesGroup` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_FinDocCreditCheckStatus` | `I_FinDocCreditCheckStatus` | [0..1] |
| `_TotalCreditCheckStatus` | `I_TotalCreditCheckStatus` | [0..1] |
| `_OverallSDProcessStatus` | `I_OverallSDProcessStatus` | [0..1] |
| `_CentralCreditCheckStatus` | `I_CentralCreditCheckStatus` | [0..1] |
| `_CentralCreditChkTechErrSts` | `I_CentralCreditChkTechErrSts` | [0..1] |
| `_CustomerCreditAccount` | `I_Customer` | [0..1] |
| `_ControllingAreaCurrency` | `I_Currency` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_SalesDocumentRjcnReason` | `I_SalesDocumentRjcnReason` | [0..1] |
| `_Extension` | `E_SalesDocumentBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ICRDTBLKDSLSDOC'
@VDM: {
  viewType:#COMPOSITE
}
@AbapCatalog.compiler.compareFilter: true
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #REQUIRED
}
@ObjectModel:{
   representativeKey: 'SalesDocument',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #L
}
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Credit Blocked Sales Document'
@Metadata.ignorePropagatedAnnotations: true
define view I_CreditBlockedSalesDocument
  as select from I_SalesDocumentBasic
  association [0..1] to I_SDDocumentCategory         as _SDDocumentCategory         on $projection.SDDocumentCategory = _SDDocumentCategory.SDDocumentCategory
  association [0..1] to I_SalesDocumentType          as _SalesDocumentType          on $projection.SalesDocumentType = _SalesDocumentType.SalesDocumentType
  association [0..1] to I_SalesOrganization          as _SalesOrganization          on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel        as _DistributionChannel        on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_Division                   as _OrganizationDivision       on $projection.OrganizationDivision = _OrganizationDivision.Division
  association [0..1] to I_SalesOffice                as _SalesOffice                on $projection.SalesOffice = _SalesOffice.SalesOffice
  association [0..1] to I_SalesGroup                 as _SalesGroup                 on $projection.SalesGroup = _SalesGroup.SalesGroup
  association [0..1] to I_Customer                   as _SoldToParty                on $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_FinDocCreditCheckStatus    as _FinDocCreditCheckStatus    on $projection.FinDocCreditCheckStatus = _FinDocCreditCheckStatus.FinDocCreditCheckStatus
  association [0..1] to I_TotalCreditCheckStatus     as _TotalCreditCheckStatus     on $projection.TotalCreditCheckStatus = _TotalCreditCheckStatus.TotalCreditCheckStatus
  association [0..1] to I_OverallSDProcessStatus     as _OverallSDProcessStatus     on $projection.OverallSDProcessStatus = _OverallSDProcessStatus.OverallSDProcessStatus
  association [0..1] to I_CentralCreditCheckStatus   as _CentralCreditCheckStatus   on $projection.CentralCreditCheckStatus = _CentralCreditCheckStatus.CentralCreditCheckStatus
  association [0..1] to I_CentralCreditChkTechErrSts as _CentralCreditChkTechErrSts on $projection.CentralCreditChkTechErrSts = _CentralCreditChkTechErrSts.CentralCreditChkTechErrSts
  association [0..1] to I_Customer                   as _CustomerCreditAccount      on $projection.CustomerCreditAccount = _CustomerCreditAccount.Customer
  association [0..1] to I_Currency                   as _ControllingAreaCurrency    on $projection.ControllingAreaCurrency = _ControllingAreaCurrency.Currency
  association [0..1] to I_Currency                   as _TransactionCurrency        on $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_SalesDocumentRjcnReason    as _SalesDocumentRjcnReason    on $projection.SalesDocumentRjcnReason = _SalesDocumentRjcnReason.SalesDocumentRjcnReason
  //Extensibility
  association [0..1] to E_SalesDocumentBasic         as _Extension                  on $projection.SalesDocument = _Extension.SalesDocument
{

      //Key
  key SalesDocument,

      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      SDDocumentCategory,
      @ObjectModel.foreignKey.association: '_SalesDocumentType'
      SalesDocumentType,

      //Sales Org
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,

      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,

      //Admin
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,

      //Creddit Block
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalNetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.foreignKey.association: '_CustomerCreditAccount'
      CustomerCreditAccount,
      @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
      ReleasedCreditAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ControllingAreaCurrency'
      ControllingAreaCurrency,
      CreditBlockReleaseDate,
      NextShippingDate,
      NextCreditCheckDate,
      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      @Consumption.hidden: true
      cast( '  ' as abgru_va ) as SalesDocumentRjcnReason,

      //Status
      @ObjectModel.foreignKey.association: '_FinDocCreditCheckStatus'
      FinDocCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_TotalCreditCheckStatus'
      TotalCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      OverallSDProcessStatus,
      @ObjectModel.foreignKey.association: '_CentralCreditCheckStatus'
      CentralCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_CentralCreditChkTechErrSts'
      CentralCreditChkTechErrSts,

      //Association
      _TransactionCurrency,
      _SDDocumentCategory,
      _SalesDocumentType,
      _SalesOrganization,
      _DistributionChannel,
      _OrganizationDivision,
      _SalesOffice,
      _SalesGroup,
      _SoldToParty,
      _CustomerCreditAccount,
      _FinDocCreditCheckStatus,
      _TotalCreditCheckStatus,
      _OverallSDProcessStatus,
      _CentralCreditCheckStatus,
      _CentralCreditChkTechErrSts,
      _ControllingAreaCurrency,
      _SalesDocumentRjcnReason
}
where
  TotalCreditCheckStatus = 'B' and OverallSDProcessStatus <> 'C'
```
