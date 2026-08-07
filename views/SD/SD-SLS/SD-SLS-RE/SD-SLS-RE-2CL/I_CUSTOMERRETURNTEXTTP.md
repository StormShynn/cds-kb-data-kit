---
name: I_CUSTOMERRETURNTEXTTP
description: Customerreturntexttp
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - interface-view
  - transactional-processing
  - customer
  - text
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERRETURNTEXTTP

**Customerreturntexttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerReturn` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LongTextID` | ✓ | |  |  |  |  |
| `LongTextIDForEdit` |  | |  |  |  |  |
| `LanguageForEdit` |  | |  |  |  |  |
| `LongText` |  | |  |  |  |  |
| `CustomerReturnType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_CustomerReturn` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Returns Order - Text TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['CustomerReturn', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_CustomerReturnTextTP 
  as projection on R_CustomerReturnTextTP as CustomerReturnText 
{
  key CustomerReturnText.CustomerReturn,
  @Semantics.language:true  
  key CustomerReturnText.Language,
  key CustomerReturnText.LongTextID, 
  
  @ObjectModel.editableFieldFor: 'LongTextID'
  CustomerReturnText.LongTextIDForEdit,    
  @Semantics.language:true  
  @ObjectModel.editableFieldFor: 'Language'
  CustomerReturnText.LanguageForEdit, 
  @Semantics.text:true
  CustomerReturnText.LongText,       

  //    DCL
  @Consumption.hidden: true
  CustomerReturnText.CustomerReturnType,
  @Consumption.hidden: true
  CustomerReturnText.SalesOrganization,
  @Consumption.hidden: true
  CustomerReturnText.DistributionChannel,
  @Consumption.hidden: true
  CustomerReturnText.OrganizationDivision,
  
  //Composition
  _CustomerReturn : redirected to parent I_CustomerReturnTP     
}
```
