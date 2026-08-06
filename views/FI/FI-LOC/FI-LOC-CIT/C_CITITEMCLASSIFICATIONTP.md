---
name: C_CITITEMCLASSIFICATIONTP
description: Cititemclassificationtp
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CIT
  - consumption-view
  - transactional-processing
  - classification
  - item-level
  - component:FI-LOC-CIT
  - lob:Finance
---
# C_CITITEMCLASSIFICATIONTP

**Cititemclassificationtp**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CITClassificationUUID` | `CITClassificationUUID` |
| `Ledger` | `}] Ledger` |
| `SourceLedger` | `SourceLedger` |
| `CompanyCode` | `} ] CompanyCode` |
| `FiscalYear` | `FiscalYear` |
| `AccountingDocument` | `AccountingDocument` |
| `LedgerGLLineItem` | `LedgerGLLineItem` |
| `CITReportingDate` | `CITReportingDate` |
| `PostingDate` | `PostingDate` |
| `CorporateIncomeTaxHierarchy` | `}] CorporateIncomeTaxHierarchy` |
| `CITClassificationCode` | `}] CITClassificationCode` |
| `CITClassificationCodeDesc` | `CITClassificationCodeDesc` |
| `CITItemAmountInDisplayCurrency` | `CITItemAmountInDisplayCurrency` |
| `Currency` | `Currency` |

## Source Code

```abap
@VDM: {
  viewType:#CONSUMPTION,
  usage.type: [#TRANSACTIONAL_PROCESSING_SERVICE]
}
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}

@ObjectModel: {
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #D,
    sizeCategory: #L
  },
  sapObjectNodeType.name: 'CITItemClassification',
  semanticKey: ['CITClassificationUUID'],
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: ['item'],
  elementSuffix: 'Clf',
  quota: {
    maximumBytes: 6900,
    maximumFields: 345
  }
}

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Search.searchable: true
@EndUserText.label: 'CIT Item Classification - TP'

define root view entity C_CITItemClassificationTP
  provider contract transactional_query
  as projection on R_CITItemClassificationTP as item
{

  key CITClassificationUUID,

      @Consumption.filter : { selectionType: #RANGE , multipleSelections : true, mandatory: true}
      @Consumption.valueHelpDefinition: [{
        entity: { name: 'I_CITClassfctnConfigurationVH', element: 'Ledger' },
        additionalBinding: [{
            element: 'CompanyCode', localElement: 'CompanyCode', usage: #FILTER_AND_RESULT
        }, {
            element: 'CorporateIncomeTaxHierarchy', localElement: 'CorporateIncomeTaxHierarchy', usage: #FILTER_AND_RESULT
        }]
      }]
      @Search.defaultSearchElement: true
      Ledger,

      SourceLedger,

      @Consumption.filter : { selectionType: #RANGE , multipleSelections : true, mandatory: true}
      @Consumption.valueHelpDefinition: [{
        entity: { name: 'I_CITClassfctnConfigurationVH', element: 'CompanyCode' },
            additionalBinding: [{
                element: 'Ledger', localElement: 'Ledger', usage: #FILTER_AND_RESULT
            }, {
                element: 'CorporateIncomeTaxHierarchy', localElement: 'CorporateIncomeTaxHierarchy', usage: #FILTER_AND_RESULT
            }]
      } ]
      @Search.defaultSearchElement: true
      CompanyCode,

      FiscalYear,

      AccountingDocument,

      LedgerGLLineItem,


      @Consumption.filter : { selectionType: #INTERVAL , mandatory : true}
      CITReportingDate,
      
      @Consumption.filter : { selectionType: #INTERVAL , mandatory : true}
      PostingDate,

      @Consumption.filter : { selectionType: #RANGE , multipleSelections : true, mandatory: true}
      @Consumption.valueHelpDefinition: [{
        entity: { name: 'I_CITClassfctnConfigurationVH', element: 'CorporateIncomeTaxHierarchy' },
            additionalBinding: [{
                element: 'Ledger', localElement: 'Ledger', usage: #FILTER_AND_RESULT
            }, {
                element: 'CompanyCode', localElement: 'CompanyCode', usage: #FILTER_AND_RESULT
            }]
      }]
      @Search.defaultSearchElement: true
      CorporateIncomeTaxHierarchy,

      @Consumption.filter : { selectionType: #RANGE , multipleSelections : true }
      @Consumption.valueHelpDefinition: [{
        entity: { name: 'I_CITClassificationCodeVH', element: 'CITClassificationCode'  },
        additionalBinding: [{ element: 'CorporateIncomeTaxHierarchy', localElement: 'CorporateIncomeTaxHierarchy', usage: #FILTER_AND_RESULT }]}]
      @UI.textArrangement: #TEXT_LAST
      @ObjectModel.text.element: ['CITClassificationCodeDesc']
      CITClassificationCode,
      
      @Consumption.filter.hidden: true
      @Semantics.text: true
      CITClassificationCodeDesc,
      
      

      @Semantics.amount.currencyCode: 'Currency'
      CITItemAmountInDisplayCurrency,

      Currency

}
```
