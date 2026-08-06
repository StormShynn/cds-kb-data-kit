---
name: I_CLFNOBJECTCHARCVALUEDEX
description: Clfnobjectcharcvaluedex
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - data-extraction
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNOBJECTCHARCVALUEDEX

**Clfnobjectcharcvaluedex**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `'AUSP'` | `table: 'AUSP'` |
| `'ADZHL']` | `tableElement: ['OBJEK','ATINN','ATZHL','MAFID','KLART','ADZHL']` |
| `'TimeIntervalNumber']` | `viewElement: ['ClfnObjectID','CharcInternalID','ClfnCharcValuePositionNumber','ClfnObjectType','ClassType','TimeIntervalNumber']` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction.delta.changeDataCapture.mapping: [ 
  { table: 'AUSP',
    role: #MAIN,
    tableElement: ['OBJEK','ATINN','ATZHL','MAFID','KLART','ADZHL'], 
    viewElement: ['ClfnObjectID','CharcInternalID','ClfnCharcValuePositionNumber','ClfnObjectType','ClassType','TimeIntervalNumber'] }, 
  { table: 'CLF_HDR', 
    role: #LEFT_OUTER_TO_ONE_JOIN, 
    tableElement: ['OBTAB','OBJEK','MAFID','KLART'], 
    viewElement: ['ClfnObjectTable','ClfnObjectID','ClfnObjectType','ClassType'] } ]
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Clfn Characteristic Value of Object DEX'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,  
     #SQL_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.sapObjectNodeType.name: 'ClfnObjectCharacteristicValue' 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_ClfnObjectCharcValueDEX
  as select from I_ClfnObjectCharcValueBasic as Valuation
    inner join P_ClfnObjectHeader as ObjectHeader
      on  Valuation.ClassType      = ObjectHeader.ClassType
      and Valuation.ClfnObjectType = ObjectHeader.ClfnObjectType
      and Valuation.ClfnObjectID   = ObjectHeader.objekp      

    association [1..*] to I_ClfnCharacteristic as _Characteristic 
      on $projection.CharcInternalID    = _Characteristic.CharcInternalID   
     and $projection.ValidityStartDate <= _Characteristic.ValidityEndDate
     and $projection.ValidityEndDate   >= _Characteristic.ValidityStartDate        
                    
{
  key ObjectHeader.ClfnObjectID,
  key Valuation.CharcInternalID,
  key Valuation.CharcValuePositionNumber as ClfnCharcValuePositionNumber,
  key Valuation.ClfnObjectType,
  key Valuation.ClassType,
  key Valuation.TimeIntervalNumber,
      ObjectHeader.ClfnObjectTable,         
      Valuation.CharcValueIntervalType,
      Valuation.CharcValue,
      Valuation.CharcFromNumericValue,  
      Valuation.CharcFromNumericValueUnit,
      Valuation.CharcToNumericValue,     
      Valuation.CharcToNumericValueUnit,
      Valuation.CharcFromDecimalValue,
      Valuation.CharcToDecimalValue,
      @Semantics.amount.currencyCode: 'Currency'
      Valuation.CharcFromAmount,
      @Semantics.amount.currencyCode: 'Currency'
      Valuation.CharcToAmount,
      Valuation.Currency,
      Valuation.CharcFromDate,
      Valuation.CharcToDate,
      Valuation.CharcFromTime,
      Valuation.CharcToTime, 
      Valuation.CharacteristicAuthor as CharcAuthor,   
      Valuation.IsDeleted,
      Valuation.ChangeNumber, 
      Valuation.CharcValueSortPosition,
      Valuation.ValidityStartDate,
      Valuation.ValidityEndDate,          
      ObjectHeader.LastChangeDateTime,
        
     _Characteristic
}
where Valuation.ClfnObjectType = 'O'
```
