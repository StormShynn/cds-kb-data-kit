---
name: I_CUSTOMERDUNNING
description: "Customerdunning"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - customer
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
---
# I_CUSTOMERDUNNING

**Customerdunning**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `Customer` | ✓ | |  | `kunnr` |  |  |
| `DunningArea` | ✓ | |  | `maber` |  |  |
| `LastDunnedOn` |  | |  | `madat` |  |  |
| `DunningProcedure` |  | |  | `mahna` |  |  |
| `DunningLevel` |  | |  | `mahns` |  |  |
| `DunningBlock` |  | |  | `mansp` |  |  |
| `DunningRecipient` |  | |  | `knrma` |  |  |
| `LegDunningProcedureOn` |  | |  | `gmvdt` |  |  |
| `DunningClerk` |  | |  | `busab` |  |  |
| `_CustomerCompany` | | ✓ | | | | |
| `_DunningArea` | | ✓ | | | | |
| `_DunningAreaText` | | ✓ | | | | |
| `_DunningProcedure` | | ✓ | | | | |
| `_DunningProcedureText` | | ✓ | | | | |
| `_DunningBlock` | | ✓ | | | | |
| `_DunningBlockText` | | ✓ | | | | |
| `_DunningClerk` | | ✓ | | | | |
| `_DunningRecipient` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerCompany` | `I_CustomerCompany` | [1..1] |
| `_DunningArea` | `I_DunningArea` | [1..1] |
| `_DunningAreaText` | `I_DunningAreaText` | [0..*] |
| `_DunningProcedure` | `I_DunningProcedure` | [1..1] |
| `_DunningProcedureText` | `I_DunningProcedureText` | [0..*] |
| `_DunningBlock` | `I_DunningBlockingReasonCode` | [1..1] |
| `_DunningBlockText` | `I_DunningBlockingReasonText` | [0..*] |
| `_DunningClerk` | `I_AccountingClerk` | [1..1] |
| `_DunningRecipient` | `I_Customer` | [1..1] |
| `_Customer` | `I_Customer` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Customer Company Code Dunning Fields'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
//@AccessControl.privilegedAssociations:  [ '_BPDataControllerUsage' ]
@AbapCatalog.sqlViewName: 'IMDCUSTDUNNING'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'CustomerDunning' 
@ObjectModel.representativeKey:'DunningArea'
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED 
//@AccessControl.personalData.blockingIndicator: [IsBusinessPurposeCompleted]
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,  
                                     #ANALYTICAL_DIMENSION,                                  
                                     #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations:true 
@Metadata.allowExtensions:true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_CustomerDunning
  as select from knb5
  association [1..1] to I_CustomerCompany as _CustomerCompany on $projection.Customer = _CustomerCompany.Customer
                                                              and $projection.CompanyCode = _CustomerCompany.CompanyCode
  association [1..1] to I_DunningArea as _DunningArea on $projection.CompanyCode  = _DunningArea.CompanyCode
                                                     and $projection.DunningArea  = _DunningArea.DunningArea
                                                     
  association [0..*] to I_DunningAreaText as _DunningAreaText on $projection.CompanyCode = _DunningAreaText.CompanyCode
                                                             and $projection.DunningArea = _DunningAreaText.DunningArea
                                                             
  association [1..1] to I_DunningProcedure as _DunningProcedure on $projection.DunningProcedure = _DunningProcedure.DunningProcedure
  
  association [0..*] to I_DunningProcedureText as _DunningProcedureText on $projection.DunningProcedure = _DunningProcedureText.DunningProcedure
                                                     
  association [1..1] to I_DunningBlockingReasonCode as _DunningBlock on $projection.DunningBlock = _DunningBlock.DunningBlockingReason
  
  association [0..*] to I_DunningBlockingReasonText as _DunningBlockText on $projection.DunningBlock = _DunningBlockText.DunningBlockingReason
  
  association [1..1] to I_AccountingClerk as _DunningClerk on $projection.CompanyCode  = _DunningClerk.CompanyCode
                                                          and $projection.DunningClerk = _DunningClerk.AccountingClerk
                                                          
  association [1..1] to I_Customer as _DunningRecipient on $projection.DunningRecipient = _DunningRecipient.Customer
  
  association [1..1] to I_Customer as _Customer on $projection.Customer = _Customer.Customer                                                         
{
      @ObjectModel.foreignKey.association: '_CustomerCompany'
  key knb5.bukrs       as  CompanyCode,
      @ObjectModel.foreignKey.association: '_Customer'
  key knb5.kunnr       as  Customer,
      //@ObjectModel.foreignKey.association: '_DunningArea'
      @ObjectModel.text.association: '_DunningAreaText'
  key knb5.maber       as  DunningArea,
      knb5.madat       as  LastDunnedOn,
      @ObjectModel.foreignKey.association: '_DunningProcedure'
      @ObjectModel.text.association: '_DunningProcedureText'
      knb5.mahna       as  DunningProcedure,
      knb5.mahns       as  DunningLevel,
      @ObjectModel.foreignKey.association: '_DunningBlock'
      @ObjectModel.text.association: '_DunningBlockText'
      knb5.mansp       as  DunningBlock,
      @ObjectModel.foreignKey.association: '_DunningRecipient'
      knb5.knrma       as  DunningRecipient,
      knb5.gmvdt       as  LegDunningProcedureOn,
      @ObjectModel.foreignKey.association: '_DunningClerk'
      knb5.busab       as  DunningClerk,   
      
      /*associations*/ 
      _CustomerCompany,
      _Customer,
      _DunningArea,
      _DunningAreaText,
      _DunningProcedure,
      _DunningProcedureText,
      _DunningBlock,
      _DunningBlockText,
      _DunningClerk,
      _DunningRecipient
      
//      @Consumption.hidden: true
//      _Customer.BusinessPartner,
//      _Customer._BPDataControllerUsage as _BPDataControllerUsage

}
```
