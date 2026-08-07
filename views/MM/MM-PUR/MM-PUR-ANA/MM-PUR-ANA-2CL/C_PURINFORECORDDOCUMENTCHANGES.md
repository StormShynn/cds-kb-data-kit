---
name: C_PURINFORECORDDOCUMENTCHANGES
description: Purinforecorddocumentchanges
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - document
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURINFORECORDDOCUMENTCHANGES

**Purinforecorddocumentchanges**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `name:'C_GregorianCalDateFuncVH'` |  | |  |  |
| `element:'DateFunction'` |  | |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMPIRDOCCHNG'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.serviceQuality:  #B
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #CONSUMPTION
@ObjectModel.usageType.dataClass : #MASTER
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Purchase Info Record Document Changes'
define view C_PurInfoRecordDocumentChanges 
  with parameters    
    @Consumption.defaultValue: 'PREVIOUS30DAYS'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction    : datefunctionid,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_StartDate       : vdm_validitystart,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_EndDate         : vdm_validityend

  as select from    P_PurInfoRecordDocumentChanges(  P_StartDate: $parameters.P_StartDate, P_EndDate: $parameters.P_EndDate ) as PRIChanges

{
  key ChangeDocObject,
  key ChangeDocument,
  key DatabaseTable,
  key ChangeDocTableKey,
  key ChangeDocDatabaseTableField,

      //  key ChangeDocItemChangeType,

      ChangeDocPreviousUnit,
      ChangeDocNewUnit,
      ChangeDocPreviousCurrency,
      ChangeDocNewCurrency,
      ChangeDocNewFieldValue,
      ChangeDocPreviousFieldValue,
      ChangeDocTextIsChanged,

      CreatedByUser,
      CreationDate,
      CreationTime,
      ChangeTransactionCode,
      ChangeDocChangeType,
      
      // Added for DCL
      ChangeDocObjectClass 
}
```
