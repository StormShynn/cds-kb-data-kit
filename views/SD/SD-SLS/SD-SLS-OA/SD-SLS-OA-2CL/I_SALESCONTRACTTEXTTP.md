---
name: I_SALESCONTRACTTEXTTP
description: Salescontracttexttp
app_component: SD-SLS-OA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - transactional-processing
  - sales-contract
  - contract
  - text
  - component:SD-SLS-OA-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTTEXTTP

**Salescontracttexttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesContract` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `LongTextID` | ✓ | |  |  |
| `LongTextIDForEdit` |  | |  |  |
| `LanguageForEdit` |  | |  |  |
| `LongText` |  | |  |  |
| `SalesContractType` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `OrganizationDivision` |  | |  |  |
| `_SalesContract` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Sales Contract - Text TP'

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
   semanticKey: ['SalesContract', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SalesContractTextTP
  as projection on R_SalesContractTextTP as SalesContractText
{
  key SalesContractText.SalesContract,
      @Semantics.language:true
  key SalesContractText.Language,
  key SalesContractText.LongTextID,

      @ObjectModel.editableFieldFor: 'LongTextID'
      SalesContractText.LongTextIDForEdit,
      @Semantics.language:true
      @ObjectModel.editableFieldFor: 'Language'
      SalesContractText.LanguageForEdit,
      @Semantics.text:true
      SalesContractText.LongText,

      //TextDeterminationProcedure,
      //TextDeterminationProcedureItem,

      //    DCL
      @Consumption.hidden: true
      SalesContractText.SalesContractType,
      @Consumption.hidden: true
      SalesContractText.SalesOrganization,
      @Consumption.hidden: true
      SalesContractText.DistributionChannel,
      @Consumption.hidden: true
      SalesContractText.OrganizationDivision,


      //Composition
      _SalesContract : redirected to parent I_SalesContractTP
}
```
