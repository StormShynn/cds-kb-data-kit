---
name: I_REINVOICEITEMDATA
description: Reinvoiceitemdata
app_component: RE-FX-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-RA
  - interface-view
  - item-level
  - component:RE-FX-RA-2CL
  - lob:Other
---
# I_REINVOICEITEMDATA

**Reinvoiceitemdata**

| Property | Value |
|---|---|
| App Component | `RE-FX-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `REInvoiceUUID` | `REInvoiceUUID` |
| key `REInvoiceItemNumber` | `REInvoiceItemNumber` |
| `REStatusObjectCalculation` | `REStatusObjectCalculation` |
| `REConditionType` | `REConditionType` |
| `REFlowType` | `REFlowType` |
| `CalculationPeriodStartDate` | `CalculationPeriodStartDate` |
| `CalculationPeriodEndDate` | `CalculationPeriodEndDate` |
| `RETaxType` | `RETaxType` |
| `RETaxGroup` | `RETaxGroup` |
| `PaymentTerms` | `PaymentTerms` |
| `NetDueDate` | `NetDueDate` |
| `ReferenceDocumentType` | `ReferenceDocumentType` |
| `OriginalReferenceDocument` | `OriginalReferenceDocument` |
| `RETaxDate` | `RETaxDate` |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MASTER }
  
@ObjectModel.semanticKey: ['REInvoiceUUID', 'REInvoiceItemNumber']

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:  [  
//                                        #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
//                                        #ANALYTICAL_PROVIDER,
                                        #CDS_MODELING_DATA_SOURCE,
//                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY      ]
                                        
@EndUserText.label: 'Real Estate Invoice Item'
define view entity I_REInvoiceItemData
  as select from I_REInvoiceItem  
  {
  key REInvoiceUUID,
  key REInvoiceItemNumber, 
      REStatusObjectCalculation,
      REConditionType,
      REFlowType,
      CalculationPeriodStartDate,
      CalculationPeriodEndDate,
      RETaxType,
      RETaxGroup,
      PaymentTerms, 
      NetDueDate,
      ReferenceDocumentType,
      OriginalReferenceDocument,
      RETaxDate 

}
```
