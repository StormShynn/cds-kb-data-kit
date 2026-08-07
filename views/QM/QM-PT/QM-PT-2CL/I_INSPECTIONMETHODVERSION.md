---
name: I_INSPECTIONMETHODVERSION
description: Inspectionmethodversion
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - inspection
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTIONMETHODVERSION

**Inspectionmethodversion**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspectionMethodPlant` | ✓ | |  | `werks` |
| `InspectionMethod` | ✓ | |  | `pmtnr` |
| `InspectionMethodVersion` | ✓ | |  | `version` |
| `InspectionMethodValidFromDate` |  | |  | `gueltigab` |
| `InspectionMethodSearchField` |  | |  | `sortfeld` |
| `InspectionMethodStatus` |  | |  | `loekz` |
| `InspectorQualification` |  | |  | `prfql` |
| `InspMethInformationField1` |  | |  | `dummy10` |
| `InspMethInformationField2` |  | |  | `dummy20` |
| `InspMethInformationField3` |  | |  | `dummy40` |
| `QltyMstrDataAuthorizationGroup` |  | |  | `qauth` |
| `CreatedByUser` |  | |  | `autor` |
| `CreationDate` |  | |  | `dates` |
| `LastChangedByUser` |  | |  | `aeaut` |
| `LastChangeDate` |  | |  | `datae` |
| `ChangedDateTime` |  | |  | `case qmtb.changeddatetime when 0 then cast( '19000101010101' as tzntstmps ) else qmtb.changeddatetime end` |
| `_InspectionMethod` | | ✓ | | |
| `_InspectionMethodPlant` | | ✓ | | |
| `_InspectionMethodText` | | ✓ | | |
| `_InspectionMethodStatus` | | ✓ | | |
| `_InspectionMethodStatusText` | | ✓ | | |
| `_InspectorQualification` | | ✓ | | |
| `_InspectorQualificationText` | | ✓ | | |
| `_QltyMstrDataAuthznGrp` | | ✓ | | |
| `_QltyMstrDataAuthznGrpTxt` | | ✓ | | |
| `_InspMethCreatedByUser` | | ✓ | | |
| `_InspMethLastChangedByUser` | | ✓ | | |
| `_CreatedByUserContactCard` | | ✓ | | |
| `_LastChangedByUserContactCard` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionMethod` | `I_InspectionMethod` | [1..1] |
| `_InspectionMethodPlant` | `I_Plant` | [0..1] |
| `_InspectionMethodText` | `I_InspectionMethodVersionText` | [1..*] |
| `_InspectionMethodStatus` | `I_InspectionMstrDataStatus` | [0..1] |
| `_InspectionMethodStatusText` | `I_InspectionMstrDataStatusText` | [0..*] |
| `_InspectorQualification` | `I_InspectorQualification` | [0..1] |
| `_InspectorQualificationText` | `I_InspectorQualificationText` | [0..*] |
| `_QltyMstrDataAuthznGrp` | `I_QltyMstrDataAuthorizationGrp` | [0..1] |
| `_QltyMstrDataAuthznGrpTxt` | `I_QltyMstrDataAuthznGroupTxt` | [0..*] |
| `_InspMethCreatedByUser` | `I_User` | [0..1] |
| `_InspMethLastChangedByUser` | `I_User` | [0..1] |
| `_CreatedByUserContactCard` | `I_UserContactCard` | [0..1] |
| `_LastChangedByUserContactCard` | `I_UserContactCard` | [0..1] |
| `_Extension` | `E_InspectionMethodVersion` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IINSPMETHODVERS',
    preserveKey: true,
    compiler.compareFilter: true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
    authorizationCheck: #MANDATORY,
    privilegedAssociations: ['_InspectionMethod','_LASTCHANGEDBYUSERCONTACTCARD','_INSPMETHCREATEDBYUSER','_INSPMETHLASTCHANGEDBYUSER','_CREATEDBYUSERCONTACTCARD']
}
@EndUserText.label: 'Inspection Method Version'
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'InspectionMethodVersion'
@ObjectModel.usageType: {
    dataClass: #MASTER,
    sizeCategory: #M,
    serviceQuality: #C 
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionMethodVersion as select from qmtb

  association [1..1] to I_InspectionMethod as _InspectionMethod
            on  $projection.InspectionMethodPlant = _InspectionMethod.InspectionMethodPlant
            and $projection.InspectionMethod      = _InspectionMethod.InspectionMethod

  association [0..1] to I_Plant as _InspectionMethodPlant
            on $projection.InspectionMethodPlant  = _InspectionMethodPlant.Plant

  association [1..*] to I_InspectionMethodVersionText as _InspectionMethodText
            on $projection.InspectionMethodPlant    = _InspectionMethodText.InspectionMethodPlant
            and $projection.InspectionMethod        = _InspectionMethodText.InspectionMethod
            and $projection.InspectionMethodVersion = _InspectionMethodText.InspectionMethodVersion
   
  association [0..1] to I_InspectionMstrDataStatus     as _InspectionMethodStatus
            on $projection.InspectionMethodStatus = _InspectionMethodStatus.InspectionMasterDataStatus
            
  association [0..*] to I_InspectionMstrDataStatusText as _InspectionMethodStatusText
            on $projection.InspectionMethodStatus = _InspectionMethodStatusText.InspectionMasterDataStatus

  association [0..1] to I_InspectorQualification       as _InspectorQualification
            on  $projection.InspectorQualification = _InspectorQualification.InspectorQualification

  association [0..*] to I_InspectorQualificationText   as _InspectorQualificationText
            on  $projection.InspectorQualification = _InspectorQualificationText.InspectorQualification
              
  association [0..1] to I_QltyMstrDataAuthorizationGrp as _QltyMstrDataAuthznGrp
            on $projection.QltyMstrDataAuthorizationGroup = _QltyMstrDataAuthznGrp.QltyMstrDataAuthorizationGroup
            
  association [0..*] to I_QltyMstrDataAuthznGroupTxt   as _QltyMstrDataAuthznGrpTxt     
            on  $projection.QltyMstrDataAuthorizationGroup = _QltyMstrDataAuthznGrpTxt.QltyMstrDataAuthorizationGroup

  association [0..1] to I_User as _InspMethCreatedByUser
            on $projection.CreatedByUser = _InspMethCreatedByUser.UserID

  association [0..1] to I_User as _InspMethLastChangedByUser
            on $projection.LastChangedByUser = _InspMethLastChangedByUser.UserID
            
  // Contact Card for administrative user data
  association [0..1] to I_UserContactCard as _CreatedByUserContactCard
            on $projection.CreatedByUser = _CreatedByUserContactCard.ContactCardID
  association [0..1] to I_UserContactCard as _LastChangedByUserContactCard
            on $projection.LastChangedByUser = _LastChangedByUserContactCard.ContactCardID

   //Extension
  association [1..1] to E_InspectionMethodVersion as _Extension         
            on $projection.InspectionMethodPlant   = _Extension.InspectionMethodPlant and
               $projection.InspectionMethod        = _Extension.InspectionMethod and
               $projection.InspectionMethodVersion = _Extension.InspectionMethodVersion                   
{ 
    @ObjectModel.foreignKey.association: '_InspectionMethodPlant'
    @EndUserText.label: 'Inspection Method Plant'
    key qmtb.werks   as InspectionMethodPlant, 
    @ObjectModel.foreignKey.association: '_InspectionMethod'
    key qmtb.pmtnr   as InspectionMethod, 
    @EndUserText.label: 'Inspection Method Version'
    key qmtb.version as InspectionMethodVersion,

    @Semantics.businessDate.from: true         
    qmtb.gueltigab   as InspectionMethodValidFromDate,  
    qmtb.sortfeld    as InspectionMethodSearchField,
    @ObjectModel.foreignKey.association: '_InspectionMethodStatus'
    @EndUserText.label: 'Inspection Method Status'  
    qmtb.loekz       as InspectionMethodStatus, 
//  qmtb.lsper, //InspectionMethod is used indicator
      //--[ GENERATED:012:GlBfhyFV7jY4iHvp9{5ddW
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_InspectorQualificationStdVH',
                     element: 'InspectorQualification' }
        }]
      // ]--GENERATED
    @ObjectModel.foreignKey.association: '_InspectorQualification'
    @EndUserText.label: 'Inspector Qualification'
    qmtb.prfql       as InspectorQualification, 
    qmtb.dummy10     as InspMethInformationField1,
    qmtb.dummy20     as InspMethInformationField2,
    qmtb.dummy40     as InspMethInformationField3,
    @ObjectModel.foreignKey.association: '_QltyMstrDataAuthznGrp'
    qmtb.qauth       as QltyMstrDataAuthorizationGroup,
    
    @Semantics.user.createdBy: true
    qmtb.autor       as CreatedByUser,  
    @Semantics.systemDate.createdAt: true
    qmtb.dates       as CreationDate, 
    @Semantics.user.lastChangedBy: true
    qmtb.aeaut       as LastChangedByUser,  
    @Semantics.systemDate.lastChangedAt: true
    qmtb.datae       as LastChangeDate, 
    case qmtb.changeddatetime
      when 0 then cast( '19000101010101' as tzntstmps )
      else qmtb.changeddatetime                        end as ChangedDateTime,
    
   /* Associations */
   _InspectionMethod,
   _InspectionMethodText,
   _InspectionMethodPlant, 
   _InspectionMethodStatus, 
   _InspectionMethodStatusText,
   _InspectorQualification,
   _InspectorQualificationText,
   _QltyMstrDataAuthznGrp,
   _QltyMstrDataAuthznGrpTxt,
   _InspMethCreatedByUser,
   _InspMethLastChangedByUser,
   _CreatedByUserContactCard,
   _LastChangedByUserContactCard
}
```
