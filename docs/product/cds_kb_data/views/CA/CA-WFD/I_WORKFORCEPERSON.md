---
name: I_WORKFORCEPERSON
description: "This view provides the prerequisites for answering the following business questions: Who are the persons in my workforce and what are their basic information?"
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSON')/$value
semantic_en: "This view provides the prerequisites for answering the following business questions: Who are the persons in my workforce and what are their basic information?"
semantic_vi: "Workforce Person Details — CDS view giao diện dựa trên I_BusinessPartner."
keywords:
  - "workforce"
  - "person"
  - "details"
  - "external"
  - "first"
  - "name"
  - "last"
  - "middle"
tags:
  - CA
  - bo:plant
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
  - bo:salesorder
---
# I_WORKFORCEPERSON

**This view provides the prerequisites for answering the following business questions: Who are the persons in my workforce and what are their basic information?**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Person` | ✓ | |  | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `PersonExternalID` |  | |  | `BPIdentificationNumber` | `CHAR(60)` | Identification Number |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `MiddleName` |  | |  |  | `CHAR(40)` | Middle Name or Second Forename of a Person |
| `AdditionalLastName` |  | |  |  | `CHAR(40)` | Other Last Name of a Person |
| `PersonFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `BusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner GUID |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `DataControllerSet` |  | |  |  | `CHAR(1)` | BP: Data Controller Set Flag |
| `DataController1` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController2` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController3` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController4` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController5` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController6` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController7` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController8` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController9` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController10` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `_BusinessPartner` | | ✓ | | | | |
| `_ServicePerformerToSupplier` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_WorkplaceAddress` | | ✓ | | | | |
| `_BusinessPartnerToBPRole` | | ✓ | | | | |
| `_BusinessUser` | | ✓ | | | | |
| `_BusinessUserBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_ServicePerformerToSupplier` | `I_ServicePerformerToSuplr` | [0..*] |
| `_PersonWorkAgreement` | `I_PersonWorkAgreement` | [1..*] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [1..*] |
| `_WorkplaceAddress` | `I_WorkplaceAddress` | [0..1] |
| `_BusinessPartnerToBPRole` | `I_BusinessPartnerToBPRole` | [0..*] |
| `_BusinessUser` | `I_BusinessUser` | [0..1] |
| `_BusinessUserBasic` | `I_BusinessUserBasic` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSON')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWFPERSON'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Workforce Person Details'
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@AbapCatalog.preserveKey:true
@Metadata.allowExtensions: true
@ObjectModel.representativeKey: 'Person'
@ObjectModel.sapObjectNodeType.name:'WorkforcePerson'
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE]

// @AccessControl.personalData.blockingIndicator: 'IsBusinessPurposeCompleted'
@Consumption.dbHints:[ 'USE_HEX_PLAN' ] 
define view I_WorkforcePerson
  as select from I_BusinessPartner        as BP
    inner join   I_HrRelation             as relt           on  BP.BusinessPartner              = relt.HumRsceRelatedObjectId
                                                            and relt.ObjectType                 = 'CP' //CP - Central person
                                                            and relt.HumRsceRelshpSpecification = 'B'
                                                            and relt.HumRsceRelationship        = '207' //207    Is identical to
                                                            and relt.RelatedObjectType          = 'BP'
                                                            and relt.EndDate                    = '99991231'

    inner join   P_WFPersonIdentification as PersIdentifier on BP.BusinessPartner = PersIdentifier.BusinessPartner
  association [1..1] to I_BusinessPartner         as _BusinessPartner            on $projection.Person = _BusinessPartner.BusinessPartner
  association [0..*] to I_ServicePerformerToSuplr as _ServicePerformerToSupplier on $projection.Person = _ServicePerformerToSupplier.Person
  association [1..*] to I_PersonWorkAgreement     as _PersonWorkAgreement        on $projection.Person = _PersonWorkAgreement.Person
  association [1..*] to I_PersonWorkAgreement_1   as _PersonWorkAgreement_1      on $projection.Person = _PersonWorkAgreement_1.Person
  association [0..1] to I_WorkplaceAddress        as _WorkplaceAddress           on $projection.BusinessPartnerUUID = _WorkplaceAddress.BusinessPartnerUUID
  association [0..*] to I_BusinessPartnerToBPRole as _BusinessPartnerToBPRole    on $projection.Person = _BusinessPartnerToBPRole.BusinessPartner
  association [0..1] to I_BusinessUser            as _BusinessUser               on $projection.Person = _BusinessUser.BusinessPartner
  association [0..1] to I_BusinessUserBasic       as _BusinessUserBasic          on $projection.Person = _BusinessUserBasic.BusinessPartner
  
{
      @ObjectModel.text.element: 'PersonFullName'
  key BP.BusinessPartner                      as Person,
      PersIdentifier.BPIdentificationNumber   as PersonExternalID,
      BP.FirstName,
      BP.LastName,
      BP.MiddleName,
      BP.AdditionalLastName,
      @Semantics.text: true
      BP.PersonFullName,
      BP.BusinessPartnerUUID,
      BP.AuthorizationGroup,
      BP.IsBusinessPurposeCompleted,
      
  /////// Start of Datacontroller 10+1 fields -  Not to be consumed by any other views//////////      
        
      @Consumption.hidden:true
      @UI.hidden:true
      BP.DataControllerSet,
      @Consumption.hidden:true
      @UI.hidden:true
      BP.DataController1,
      @Consumption.hidden:true
      @UI.hidden:true
      BP.DataController2,
      @Consumption.hidden:true
      @UI.hidden:true
      BP.DataController3,
      @Consumption.hidden:true
      @UI.hidden:true
      BP.DataController4,
      @Consumption.hidden:true
      @UI.hidden:true
      BP.DataController5,
      @Consumption.hidden:true
      @UI.hidden:true
      BP.DataController6,
      @Consumption.hidden:true
      @UI.hidden:true
      BP.DataController7,
      @Consumption.hidden:true
      @UI.hidden:true
      BP.DataController8,
      @Consumption.hidden:true
      @UI.hidden:true
      BP.DataController9,
      @Consumption.hidden:true
      @UI.hidden:true
      BP.DataController10,
        
 ////////////// End of Datacontroller 10+1 fields////////// 
      _BusinessPartner,
      _ServicePerformerToSupplier,
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_PersonWorkAgreement_1'
      _PersonWorkAgreement,
      _PersonWorkAgreement_1,
      _WorkplaceAddress,
      _BusinessPartnerToBPRole,
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_BusinessUserBasic'      
      _BusinessUser,
      _BusinessUserBasic
}
where
  BP.BusinessPartnerCategory = '1'
```
