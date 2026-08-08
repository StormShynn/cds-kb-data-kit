---
name: I_CACREDITWORTHINESSITEM
description: "Cacreditworthinessitem"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - credit
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACREDITWORTHINESSITEM

**Cacreditworthinessitem**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  |  |  |
| `CalendarYear` | ✓ | |  |  |  |  |
| `CACreditWorthinessSequenceNmbr` | ✓ | |  |  |  |  |
| `CACreditWorthinessOrigin` |  | |  |  |  |  |
| `CACreditWorthinessDate` |  | |  |  |  |  |
| `CAItemCreditWorthinessValue` |  | |  |  |  |  |
| `CAItemCrdtWorthinessIsNegative` |  | |  |  |  |  |
| `CAItmCrdtWrthnssWthSignVal` |  | |  | `cast( case when CAItemCrdtWorthinessIsNegative = 'X' then cast( CAItemCreditWorthinessValue as cbetr_kk ) * -1 else cast( CAItemCreditWorthinessValue as cbetr_kk ) end as cbetr_kk )` |  |  |
| `CACrdtWorthinessItemIsReversed` |  | |  |  |  |  |
| `CACrdtWorthinessItemStatus` |  | |  | `cast( case when CACrdtWorthinessItemIsReversed = 'X' then '2' else '1' end as bonis_kk )` |  |  |
| `CACreditWorthinessItemExtKey` |  | |  |  |  |  |
| `CACreditWorthinessItemText` |  | |  |  |  |  |
| `CAApplicationArea` |  | |  |  |  |  |
| `ContractAccount` |  | |  |  |  |  |
| `CAMassRunDate` |  | |  |  |  |  |
| `CAMassRunID` |  | |  |  |  |  |
| `CADunningCounter` |  | |  |  |  |  |
| `CAReturnDocumentNumber` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `_CACreditWorthinessItemStatus` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CACreditWorthinessOrigin` | | ✓ | | | | |
| `_CAReturnDocument` | | ✓ | | | | |
| `_CalendarYear` | | ✓ | | | | |
| `_ContractAccount` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CACreditWorthinessItemStatus` | `I_CACrdtWorthinessItemStatus` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@Analytics: { dataCategory: #DIMENSION,
              internalName: #LOCAL, 
              dataExtraction: { enabled: true,
                                delta.changeDataCapture: { mapping: [ { table        : 'dfkkcrp',
                                                                        role         : #MAIN,
                                                                        viewElement  : ['BusinessPartner', 'CalendarYear', 'CACreditWorthinessSequenceNmbr'],
                                                                        tableElement : ['GPART', 'KJAHR', 'LFDNR' ] } ] } } }

@EndUserText.label: 'Creditworthiness Item'

@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions:true }

@ObjectModel: { modelingPattern:#NONE,
                representativeKey: 'CACreditWorthinessSequenceNmbr',
                sapObjectNodeType.name: 'ContrAcctgCreditWorthinessItem',
                supportedCapabilities: [
                                         #ANALYTICAL_DIMENSION,
                                         #ANALYTICAL_PROVIDER,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #B,
                             sizeCategory: #XL } }

@VDM.viewType: #COMPOSITE

define view entity I_CACreditWorthinessItem
  as select from I_CACreditWorthinessHistoryItm

  association [1..1] to I_CACrdtWorthinessItemStatus as _CACreditWorthinessItemStatus on $projection.CACrdtWorthinessItemStatus = _CACreditWorthinessItemStatus.CACrdtWorthinessItemStatus

{
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key BusinessPartner,
      @ObjectModel.foreignKey.association: '_CalendarYear'
  key CalendarYear,
  key CACreditWorthinessSequenceNmbr,

      CACreditWorthinessOrigin,
      CACreditWorthinessDate,

      CAItemCreditWorthinessValue,
      CAItemCrdtWorthinessIsNegative,
      cast( case
        when CAItemCrdtWorthinessIsNegative = 'X'
        then cast( CAItemCreditWorthinessValue as cbetr_kk ) * -1
        else cast( CAItemCreditWorthinessValue as cbetr_kk )
      end as cbetr_kk ) as CAItmCrdtWrthnssWthSignVal,

      CACrdtWorthinessItemIsReversed,
      @ObjectModel.foreignKey.association: '_CACreditWorthinessItemStatus'
      cast( case
        when CACrdtWorthinessItemIsReversed = 'X'
        then '2'
        else '1'
      end as bonis_kk ) as CACrdtWorthinessItemStatus,

      CACreditWorthinessItemExtKey,
      CACreditWorthinessItemText,

      CAApplicationArea,
      ContractAccount,
      CAMassRunDate,
      CAMassRunID,
      CADunningCounter,
      CAReturnDocumentNumber,

      CreatedByUser,
      CreationDate,
      CreationTime,

      /* Associations */
      // own associations
      _CACreditWorthinessItemStatus,
      // associations from I_CACreditWorthinessHistoryItm
      _BusinessPartner,
      _CAApplicationArea,
      _CACreditWorthinessOrigin,
      _CAReturnDocument,
      _CalendarYear,
      _ContractAccount,
      _ContractAccountPartner
}
```
