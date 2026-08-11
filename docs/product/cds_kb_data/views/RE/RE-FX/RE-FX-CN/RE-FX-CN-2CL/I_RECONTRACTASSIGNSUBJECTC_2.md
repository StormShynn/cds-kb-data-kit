---
name: I_RECONTRACTASSIGNSUBJECTC_2
description: "Real Estate Contract Subject Assignments"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTASSIGNSUBJECTC_2')/$value
semantic_en: "Real Estate Contract Subject Assignments"
semantic_vi: "Real Estate Contract Subject Assignments — CDS view giao diện dựa trên I_REContract."
keywords:
  - "real"
  - "estate"
  - "contract"
  - "subject"
  - "assignments"
  - "company"
  - "code"
  - "number"
  - "object"
  - "valid"
tags:
  - RE
  - component:RE-FX-CN-2CL
  - contract
  - interface-view
  - RE-FX
  - RE-FX-CN
  - RE-FX-CN-2CL
---
# I_RECONTRACTASSIGNSUBJECTC_2

**Real Estate Contract Subject Assignments**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTASSIGNSUBJECTC_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` | ✓ | | `_Contract` | `RealEstateContract` | `CHAR(13)` | Real Estate Contract Number |
| `REContractSubjectNumber` | ✓ | | `_ContractSubject` | `REContractSubjectNumber` | `NUMC(4)` | Contract Object Number |
| `ObjectValidFrom` | ✓ | | `_ObjectAssignment` | `ValidityStartDate` | `DATS(8)` | Validity Start Date |
| `ObjectValidTo` |  | | `_ObjectAssignment` | `ValidityEndDate` | `DATS(8)` | Validity End Date |
| `InternalRealEstateNumber` |  | | `_Contract` | `InternalRealEstateNumber` | `CHAR(13)` | Internal Key of Real Estate Object |
| `ObjectInternalID` |  | | `_Contract` | `REStatusObject` | `CHAR(22)` | Object Number |
| `Responsible` |  | |  |  | `CHAR(12)` | Person Responsible |
| `ResponsibleUserFullName` |  | | `_ResponsibleUser` | `UserDescription` | `CHAR(80)` | User Description |
| `REContractName` |  | | `_Contract` | `REContractName` | `CHAR(80)` | Contract Name |
| `ContractStartDate` |  | | `_Contract` | `ContractStartDate` | `DATS(8)` | Contract Start Date |
| `ContractEndDate` |  | | `_Contract` | `ContractEndDate` | `DATS(8)` | Contract End Date |
| `REContractFirstEndDate` |  | |  | `_Contract. REContractFirstEndDate` | `DATS(8)` | Date of First Contract End |
| `REContractNumberOld` |  | | `_Contract` | `REContractNumberOld` | `CHAR(20)` | Number of Old Contract |
| `REAuthorizationGroup` |  | | `_Contract` | `REAuthorizationGroup` | `CHAR(40)` | Authorization Group |
| `ValuationRelevance` |  | |  |  | `CHAR(10)` | Valuation Relevance |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `REContractType` |  | |  |  | `CHAR(4)` | Contract Type |
| `REContractTypeName` |  | | `_ContractTypeName` | `REContractTypeName` | `CHAR(30)` | Contract Type Name |
| `REContractSubjectDescription` |  | | `_ContractSubject` | `REContractSubjectDescription` | `CHAR(60)` | Name of Contract Object |
| `REContractSubjectClass` |  | | `_ContractSubject` | `REContractSubjectClass` | `CHAR(4)` | Contract Object Class |
| `REContractSubjectClassName` |  | | `_REContractSubjectClassName` | `REContractSubjectClassName` | `CHAR(60)` | Short Text for Fixed Values |
| `REContractSubjectType` |  | | `_ContractSubject` | `REContractSubjectType` | `CHAR(6)` | Type of Contract Object |
| `REContractSubjectTypeName` |  | | `_ContractSubjectTypeName` | `REContractSubjectTypeName` | `CHAR(60)` | Description of Contract Object Type |
| `REAccountingObject` |  | | `_ContractSubject` | `REAccountingObject` | `CHAR(22)` | Object Number Account Assignment |
| `REAccountingObjectType` |  | | `_ContractSubject` | `REAccountingObjectType` | `CHAR(2)` | Object Type |
| `REAccountingObjectName` |  | |  | `case when _ContractSubject.REAccountingObjectType = 'OR' then cast(concat_with_space(_REAccountingObjectType.AccountAssignmentTypeName, ltrim(substring(_ContractSubject.REAccountingObject,3,10),'0'),1) as recaident) when _ContractSubject.REAccountingObjectType = 'PR' then cast(concat_with_space(_REAccountingObjectType.AccountAssignmentTypeName, _ContractSubject._WBSElement.WBSElement,1) as recaident) when _ContractSubject.REAccountingObjectType = 'KS' then cast(concat( concat_with_space(_REAccountingObjectType.AccountAssignmentTypeName, substring(_ContractSubject.REAccountingObject,3,4),1), concat('/',ltrim(substring(_ContractSubject.REAccountingObject,7,10),'0'))) as recaident) else _REObjectTypeDetails.REAccountingObjectName end` | `CHAR(50)` | Complete Object Identification, for Example BE 1000/123 |
| `NumberOfREContracts` |  | |  | `cast(1 as abap.int4)` | `INT4(10)` |  |
| `_Responsible` |  | |  | `_ResponsibleUser` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_REContractType` | | ✓ | | | | |
| `_REAccountingObjectType` | | ✓ | | | | |
| `_REContractSubjectClassName` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_REContractType` | `I_REContractType` | [0..1] |
| `_ContractTypeName` | `I_REContractTypeText` | [0..1] |
| `_ContractSubjectTypeName` | `I_REContractSubjectTypeText` | [0..1] |
| `_REAccountingObjectType` | `I_AccountAssignmentTypeT` | [0..1] |
| `_REContractSubjectClassName` | `I_REContractSubjectClassTxt` | [0..1] |
| `_REObjectTypeDetails` | `I_REObjectTypeDetails` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTASSIGNSUBJECTC_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTASSIGNSUBJECTC_2')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
//@ObjectModel.representativeKey: ['RealEstateContract']
@ObjectModel.semanticKey: ['CompanyCode','RealEstateContract']
@AbapCatalog.sqlViewName: 'IRECONTRASSSUB2'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Contract Subject Assignments'
@AbapCatalog.preserveKey:true
//@ClientDependent: true
@VDM.viewType: #COMPOSITE
@ObjectModel.modelingPattern:           #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_PROVIDER, 
                                        #SQL_DATA_SOURCE, 
                                        #CDS_MODELING_DATA_SOURCE ]


@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_REContractAssignSubjectC_2
  // Start of insertion Parameters
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_ValidFrom :vdm_validitystart,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_ValidTo   :vdm_validityend
  // end of insertion Parameters
  as select from I_REContract   as _Contract
    inner join   I_REObjectAssgmt    as _ObjectAssignment on (_ObjectAssignment.REStatusObjectSource  = _Contract.REStatusObject
      and _ObjectAssignment.REObjectAssignmentType = '10'
    )   
    inner join   I_REContractSubject as _ContractSubject  on _ContractSubject.REStatusObject = _ObjectAssignment.REStatusObjectTarget
                                                          and _ObjectAssignment.ValidityEndDate   >= $parameters.P_ValidFrom
                                                          and _ObjectAssignment.ValidityStartDate <= $parameters.P_ValidTo

 //   left outer join I_REObjectTypeDetails as _REObjectTypeDetails              on  _REObjectTypeDetails.REStatusObject = _ContractSubject.REAccountingObject                                                          
  association [1..1] to I_CompanyCode              as _CompanyCode              on $projection.CompanyCode = _CompanyCode.CompanyCode
  //association [0..1] to I_REValuationRelevance as _REValuationRelevance         on $projection.ValuationRelevance = _REValuationRelevance.ValuationRelevance
  association [0..1] to I_REContractType           as _REContractType           on  $projection.REContractType   = _REContractType.REContractType
                                                          
  association [0..1] to I_REContractTypeText        as _ContractTypeName           on  _Contract.REContractType   = _ContractTypeName.REContractType
                                                                                   and _ContractTypeName.Language = $session.system_language
  association [0..1] to I_REContractSubjectTypeText as _ContractSubjectTypeName    on  _ContractSubject.REContractSubjectType = _ContractSubjectTypeName.REContractSubjectType
                                                                                   and _ContractSubjectTypeName.Language      = $session.system_language

  association [0..1] to I_AccountAssignmentTypeT    as _REAccountingObjectType     on  _REAccountingObjectType.AccountAssignmentType = $projection.REAccountingObjectType
                                                                                   and _REAccountingObjectType.Language              = $session.system_language
  // Domainvaluetext
  association [0..1] to I_REContractSubjectClassTxt as _REContractSubjectClassName on  _REContractSubjectClassName.REContractSubjectClass = _ContractSubject.REContractSubjectClass
                                                                                   and _REContractSubjectClassName.Language               = $session.system_language
  association [0..1] to I_REObjectTypeDetails as _REObjectTypeDetails              on  _REObjectTypeDetails.REStatusObject = _ContractSubject.REAccountingObject
                                                                                   

{
@ObjectModel.foreignKey.association: '_CompanyCode'
  key  CompanyCode,
  key  _Contract.RealEstateContract,
  key  _ContractSubject.REContractSubjectNumber,
  key  _ObjectAssignment.ValidityStartDate as ObjectValidFrom,
       _ObjectAssignment.ValidityEndDate as ObjectValidTo,

       _Contract.InternalRealEstateNumber,
       _Contract.REStatusObject as ObjectInternalID,
       Responsible,
       _ResponsibleUser.UserDescription as ResponsibleUserFullName,
       _Contract.REContractName,
       //contract.recnbeg
       @EndUserText.label: 'Contract Start Date'
       _Contract.ContractStartDate,
       @EndUserText.label: 'Contract End Date'
       _Contract.ContractEndDate,
       // cast( contract.recnendabs as dats )

       @EndUserText.label: 'Contract First End Date'
       _Contract. REContractFirstEndDate,
       _Contract.REContractNumberOld,
       _Contract.REAuthorizationGroup,
       //@ObjectModel.foreignKey.association: '_REValuationRelevance'
       ValuationRelevance,
       _CompanyCode.CompanyCodeName,
       @ObjectModel.foreignKey.association: '_REContractType'
       REContractType,
       _ContractTypeName.REContractTypeName,
                  
       _ContractSubject.REContractSubjectDescription,
       //_ContractSubject.ExternalId,
       _ContractSubject.REContractSubjectClass,
       @EndUserText.label: 'Contract Obj. Class Name'
       _REContractSubjectClassName.REContractSubjectClassName,
       _ContractSubject.REContractSubjectType,
       @EndUserText.label: 'assigned Object'
       _ContractSubjectTypeName.REContractSubjectTypeName,
       @EndUserText.label: 'Accounting Object'
       _ContractSubject.REAccountingObject,
       @EndUserText.label: 'Accounting Object Type'
       _ContractSubject.REAccountingObjectType,
       @EndUserText.label: 'Accounting Object Name' 
       case
       when  _ContractSubject.REAccountingObjectType = 'OR' //order
       then
       cast(concat_with_space(_REAccountingObjectType.AccountAssignmentTypeName,
       ltrim(substring(_ContractSubject.REAccountingObject,3,10),'0'),1) as recaident)
       when  _ContractSubject.REAccountingObjectType = 'PR' //wbs
       then
       cast(concat_with_space(_REAccountingObjectType.AccountAssignmentTypeName,
       _ContractSubject._WBSElement.WBSElement,1) as recaident)
       when  _ContractSubject.REAccountingObjectType = 'KS' //cost center
       then
       cast(concat(
       concat_with_space(_REAccountingObjectType.AccountAssignmentTypeName,
       substring(_ContractSubject.REAccountingObject,3,4),1),
       concat('/',ltrim(substring(_ContractSubject.REAccountingObject,7,10),'0'))) as recaident)
       else
        _REObjectTypeDetails.REAccountingObjectName
       end                              as REAccountingObjectName,

       @DefaultAggregation: #SUM
       @EndUserText.label: 'Number of Contracts'
        cast(1 as abap.int4) as NumberOfREContracts,
       
       // propagate associations
       _CompanyCode,
       //_REValuationRelevance,
       _ResponsibleUser as _Responsible,
       _REContractType,
       _REContractSubjectClassName,
       _REAccountingObjectType


}
// start of insertion Paramerters
where
      ContractEndDate   >= $parameters.P_ValidFrom
  and ContractStartDate <= $parameters.P_ValidTo;
// end   of insertion parameter
```
