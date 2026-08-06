---
name: I_DOCUMENTINFORECORDUSERVH
description: Documentinforecorduservh
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-DMS
  - interface-view
  - value-help
  - document
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORDUSERVH

**Documentinforecorduservh**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DocumentInfoRecordDocType` | `: #('ASSOCIATED_TEXT_UI_HIDDEN') key document.DocumentInfoRecordDocType` |
| key `DocumentInfoRecordDocNumber` | `document.DocumentInfoRecordDocNumber` |
| `DocumentInfoRecordDocVersion` | `}] key document.DocumentInfoRecordDocVersion` |
| `DocumentInfoRecordDocPart` | `}] key document.DocumentInfoRecordDocPart` |
| key `ResponsiblePersonName` | `document.ResponsiblePersonName` |
| `FirstName` | `UserDetail.name_first` |
| `LastName` | `UserDetail.name_last` |
| `ResponsiblePersonFullName` | `RespUser.UserDescription` |
| `LastChangedByUser` | `document.LastChangedByUser` |
| `LastChangedByUserFullName` | `ChangedUser.UserDescription` |
| `PersonNumber` | `RespUser.AddressPersonID` |
| `_DocTypeText` | *Association* |
| `_DocType` | *Association* |
| `_DocNumber` | *Association* |
| `_DocVersion` | *Association* |
| `_DocPart` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocTypeText` | `I_DocumentInfoRecordDocTypeT` | [0..*] |
| `_DocType` | `I_DocumentInfoRecordDocType` | [1..1] |
| `_DocNumber` | `I_DocumentInfoRecordDocNumber` | [0..1] |
| `_DocVersion` | `I_DocumentInfoRecordDocVersion` | [1..1] |
| `_DocPart` | `I_DocumentInfoRecordDocPrt` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCUSRVH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Document Info Record User'
@VDM.viewType: #COMPOSITE
@Search.searchable: true
@Consumption.ranked:true
@ObjectModel.dataCategory: #VALUE_HELP
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'ResponsiblePersonName'
@Analytics: { dataCategory: #DIMENSION }
@Metadata.allowExtensions: true
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle: {
  contract: {
    type:#PUBLIC_LOCAL_API
  }
}

//--[ GENERATED:012:E6ExH29r7kY4mpuAYoLAbW
@AccessControl.privilegedAssociations: ['_DocTypeText']
// ]--GENERATED
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER , #ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_DocumentInfoRecordUserVH
  as select from    P_DocumentInfoRecord as document

    //@sam left outer join usr21                as RespUser    on document.ResponsiblePersonName = RespUser.bname
    left outer join I_User             as RespUser    on document.ResponsiblePersonName = RespUser.UserID

    //@sam left outer join usr21                as ChangedUser on document.LastChangedByUser = ChangedUser.bname
    left outer join I_User             as ChangedUser on document.LastChangedByUser = ChangedUser.UserID
    
    inner join adrp                      as UserDetail  on UserDetail.persnumber  = RespUser.AddressPersonID

  --Get Document Type Association

  //--[ GENERATED:012:E6ExH29r7kY4mpuAYoLAbW
  association [0..*] to I_DocumentInfoRecordDocTypeT   as _DocTypeText on  $projection.DocumentInfoRecordDocType = _DocTypeText.DocumentInfoRecordDocType
  // ]--GENERATED
  association [1..1] to I_DocumentInfoRecordDocType    as _DocType     on  $projection.DocumentInfoRecordDocType = _DocType.DocumentInfoRecordDocType
  
  --Get Document Number Association
  association [0..1] to I_DocumentInfoRecordDocNumber  as _DocNumber  on  $projection.DocumentInfoRecordDocType   = _DocNumber.DocumentInfoRecordDocType
                                                                      and $projection.DocumentInfoRecordDocNumber = _DocNumber.DocumentInfoRecordDocNumber

  --Get Document Version Association
  association [1..1] to I_DocumentInfoRecordDocVersion as _DocVersion  on  $projection.DocumentInfoRecordDocType    = _DocVersion.DocumentInfoRecordDocType
                                                                       and $projection.DocumentInfoRecordDocNumber  = _DocVersion.DocumentInfoRecordDocNumber
                                                                       and $projection.DocumentInfoRecordDocVersion = _DocVersion.DocumentInfoRecordDocVersion

  --Get Document Part Association
  association [1..1] to I_DocumentInfoRecordDocPrt     as _DocPart     on  $projection.DocumentInfoRecordDocType    = _DocPart.DocumentInfoRecordDocType
                                                                       and $projection.DocumentInfoRecordDocPart    = _DocPart.DocumentInfoRecordDocPart
                                                                       and $projection.DocumentInfoRecordDocNumber  = _DocPart.DocumentInfoRecordDocNumber
                                                                       and $projection.DocumentInfoRecordDocVersion = _DocPart.DocumentInfoRecordDocVersion

{     
      
      //--[ GENERATED:012:E6ExH29r7kY4mpuAYoLAbW
       
     @Consumption.valueHelpDefinition: [
     { entity:  { name:    'I_DocInfoRecdDocTypeStdVH',
                     element: 'DocumentInfoRecordDocType' }
        }] 
    
   //   @DefaultAggregation:#NONE   //Added for TypeAhead     
      @ObjectModel.text.association: '_DocTypeText'
      @ObjectModel.text.control: #('ASSOCIATED_TEXT_UI_HIDDEN') 
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_DocType'
      @EndUserText.label:'Document Type'
      // @Consumption.valueHelpDefault.binding.usage:#FILTER_AND_RESULT //Added for TypeAhead 
      @Search.ranking: #MEDIUM          //Added for TypeAhead 
      @Search.fuzzinessThreshold: 0.8   //Added for TypeAhead 
      @Search.defaultSearchElement: true
  key document.DocumentInfoRecordDocType            as  DocumentInfoRecordDocType,
     //  @Consumption.valueHelpDefinition: [
    //    { entity:  { name:    'I_DocInfoRecdDocNmbrStdVH',
     //                element: 'DocumentInfoRecordDocNumber' }
     //   }]       

      @Search.ranking: #MEDIUM            //Added for TypeAhead 
      @Search.fuzzinessThreshold: 0.8   //Added for TypeAhead     
      @ObjectModel.foreignKey.association: '_DocNumber'      
      @EndUserText.label:'Document Number'
      @Search.defaultSearchElement: true
  key document.DocumentInfoRecordDocNumber          as  DocumentInfoRecordDocNumber,
            
      //--[ GENERATED:012:E6ExH29r7kY4mpuAYoLAbW
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_DocInfoRecdDocVersStdVH',
                     element: 'DocumentInfoRecordDocVersion' },
          additionalBinding: [{ localElement: 'DocumentInfoRecordDocType',
                               element: 'DocumentInfoRecordDocType' },
                              { localElement: 'DocumentInfoRecordDocNumber',
                               element: 'DocumentInfoRecordDocNumber' }]
        }]
      // ]--GENERATED
       //   @DefaultAggregation:#NONE   //Added for TypeAhead 
      @ObjectModel.foreignKey.association: '_DocVersion'
      @EndUserText.label:'Document Version'
      //@Consumption.valueHelpDefault.binding.usage:#FILTER_AND_RESULT //Added for TypeAhead 
      @Search.ranking: #MEDIUM            //Added for TypeAhead 
      @Search.fuzzinessThreshold: 0.8   //Added for TypeAhead 
      @Search.defaultSearchElement: true
  key document.DocumentInfoRecordDocVersion         as  DocumentInfoRecordDocVersion,
      
      //--[ GENERATED:012:E6ExH29r7kY4mpuAYoLAbW
       @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_DocInfoRecdDocPrtStdVH',
                     element: 'DocumentInfoRecordDocPart' },
          additionalBinding: [{ localElement: 'DocumentInfoRecordDocType',
                                element: 'DocumentInfoRecordDocType' },
                              { localElement: 'DocumentInfoRecordDocNumber',
                                element: 'DocumentInfoRecordDocNumber' },
                              { localElement: 'DocumentInfoRecordDocVersion',
                                element: 'DocumentInfoRecordDocVersion' }]
       }]
      // ]--GENERATED
       //   @DefaultAggregation:#NONE   //Added for TypeAhead 
      @ObjectModel.foreignKey.association: '_DocPart'
      @EndUserText.label:'Document Part'
      //@Consumption.valueHelpDefault.binding.usage:#FILTER_AND_RESULT //Added for TypeAhead 
      @Search.ranking: #MEDIUM            //Added for TypeAhead 
      @Search.fuzzinessThreshold: 0.8   //Added for TypeAhead 
      @Search.defaultSearchElement: true
  key document.DocumentInfoRecordDocPart            as  DocumentInfoRecordDocPart,
    
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @EndUserText.label:'Created By'
      @Semantics.user.createdBy: true
    key  document.ResponsiblePersonName                as  ResponsiblePersonName,

      @UI.hidden: true
      UserDetail.name_first as FirstName,
      
      @UI.hidden: true
      UserDetail.name_last  as LastName,
            
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @EndUserText.label:'Created By User Name'
      //@sam RespUser.techdesc                             as  ResponsiblePersonFullName,
      RespUser.UserDescription                as  ResponsiblePersonFullName,
            
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @EndUserText.label:'Last Changed By'
      @Semantics.user.lastChangedBy: true
      document.LastChangedByUser                    as  LastChangedByUser,

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @EndUserText.label:'Last Changed By User Name'
      //@sam ChangedUser.techdesc                          as  LastChangedByUserFullName,
      ChangedUser.UserDescription                          as  LastChangedByUserFullName,
      
      @UI.hidden: true
      //@sam RespUser.persnumber as PersonNumber,
      RespUser.AddressPersonID as PersonNumber,
      
      //Associations
      _DocType,
      _DocNumber,
      _DocVersion,
      _DocPart,           
      //--[ GENERATED:012:E6ExH29r7kY4mpuAYoLAbW
      @Consumption.hidden: true
      _DocTypeText
      // ]--GENERATED

}
```
