---
name: I_BPCONTACTTOFUNCANDDEPT
description: "Bpcontacttofuncanddept"
semantic_vi: "Chứa thông tin liên hệ đối tác kinh doanh liên quan đến chức năng và bộ phận, hữu ích cho việc tích hợp với hệ thống bên ngoài hoặc báo cáo dữ liệu liên hệ."
keywords:
  - "business partner"
  - "contact information"
  - "function"
  - "department"
  - "integration"
  - "reporting"
  - "external system"
  - "sap"
  - "ap-md-bp"
  - "interface view"
  - "lob other"
semantic_en: "Exposes business partner contact information related to functions and departments, useful for integrating with external systems or reporting on contact data."
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - component:AP-MD-BP
  - lob:Other
---
# I_BPCONTACTTOFUNCANDDEPT

**Bpcontacttofuncanddept**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RelationshipNumber` | ✓ | |  | `relnr` | `CHAR(12)` | BP Relationship Number |
| `BusinessPartnerCompany` | ✓ | |  | `partner1` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerPerson` | ✓ | |  | `partner2` | `CHAR(10)` | Business Partner Number |
| `ValidityEndDate` | ✓ | |  | `date_to` | `DATS(8)` | Validity Date (Valid To) |
| `ValidityStartDate` |  | | `_BPContact` | `ValidityStartDate` | `DATS(8)` | Validity Date (Valid From) |
| `ContactPersonFunction` |  | |  | `pafkt` | `CHAR(4)` | Function of Partner |
| `BPContactPersonFunction` |  | |  | `pafkt` | `CHAR(4)` | Function of Partner |
| `ContactPersonFunctionName` |  | |  | `fnctn` | `CHAR(40)` | Function name of partner |
| `ContactPersonDepartment` |  | |  | `abtnr` | `CHAR(4)` | Department |
| `ContactPersonDepartmentName` |  | |  | `dprtmnt` | `CHAR(40)` | Department at business partner |
| `ContactPersonAuthorityType` |  | |  | `paauth` | `CHAR(1)` | Partner's Authority |
| `ContactPersonVIPType` |  | |  | `pavip` | `CHAR(1)` | VIP Partner |
| `ContactPersonRemarkText` |  | |  | `parem` | `CHAR(40)` | Notes for Partner |
| `PhoneNumber` |  | |  | `tel_number` | `CHAR(30)` | Telephone No.: Dialing Code and Number |
| `PhoneNumberExtension` |  | |  | `tel_extens` | `CHAR(10)` | Telephone no.: Extension |
| `FaxNumber` |  | |  | `fax_number` | `CHAR(30)` | Fax Number: Dialing Code and Number |
| `FaxNumberExtension` |  | |  | `fax_extens` | `CHAR(10)` | Fax no.: Extension |
| `EmailAddress` |  | |  | `smtp_address` | `CHAR(241)` | Email Address |
| `RelationshipCategory` |  | |  | `reltyp` | `CHAR(6)` | Business Partner Relationship Category |
| `_BusinessPartnerCompany` | | ✓ | | | | |
| `_BusinessPartnerPerson` | | ✓ | | | | |
| `_ContactPersonDepartment` | | ✓ | | | | |
| `_ContactPersonFunction` | | ✓ | | | | |
| `_CntctPersnFuncValueHelp` | | ✓ | | | | |
| `_ContactPersonFunctionText` | | ✓ | | | | |
| `_CntctPersnDeptValueHelp` | | ✓ | | | | |
| `_ContactPersonDepartmentText` | | ✓ | | | | |
| `_BPContactPersonAuthorityText` | | ✓ | | | | |
| `_BPCntctPersnVIPIndicatorText` | | ✓ | | | | |
| `_BPContact` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerCompany` | `I_BusinessPartner` | [1..1] |
| `_BusinessPartnerPerson` | `I_BusinessPartner` | [1..1] |
| `_ContactPersonDepartment` | `I_ContactPersondepartment` | [1..1] |
| `_ContactPersonFunction` | `I_ContactPersonFunction` | [1..1] |
| `_CntctPersnFuncValueHelp` | `I_ContactPersonFunction` | [0..1] |
| `_ContactPersonFunctionText` | `I_ContactPersonFunctionT` | [0..*] |
| `_CntctPersnDeptValueHelp` | `I_ContactPersondepartment` | [0..1] |
| `_ContactPersonDepartmentText` | `I_ContactPersonDepartmentT` | [1..*] |
| `_BPContactPersonAuthorityText` | `I_BPContactPersonAuthorityText` | [1..*] |
| `_BPCntctPersnVIPIndicatorText` | `I_BPCntctPersnVIPIndicatorText` | [1..*] |
| `_BPContact` | `I_BPContact` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPCNTCTFUNCDEPT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:  #CHECK //or #CHECK
@AccessControl.personalData.blocking: #REQUIRED
//@Analytics.dataCategory: #DIMENSION //or #CUBE or #FACT
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction: {
    enabled: true     
 }
}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE]     
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey:'RelationshipNumber'
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerContactPerson'
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'BP Contact To Function and Department'
@Metadata.allowExtensions: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BPContactToFuncAndDept
  as select from but051

  association [1..1] to I_BusinessPartner          as _BusinessPartnerCompany      on _BusinessPartnerCompany.BusinessPartner = $projection.BusinessPartnerCompany
  association [1..1] to I_BusinessPartner          as _BusinessPartnerPerson       on _BusinessPartnerPerson.BusinessPartner = $projection.BusinessPartnerPerson
  association [1..1] to I_ContactPersondepartment  as _ContactPersonDepartment     on _ContactPersonDepartment.ContactPersonDepartment = $projection.ContactPersonDepartment
  association [1..1] to I_ContactPersonFunction    as _ContactPersonFunction       on _ContactPersonFunction.ContactPersonFunction = $projection.ContactPersonFunction

  association [0..1] to I_ContactPersonFunction    as _CntctPersnFuncValueHelp     on $projection.ContactPersonFunction = _CntctPersnFuncValueHelp.ContactPersonFunction
  association [0..*] to I_ContactPersonFunctionT   as _ContactPersonFunctionText   on $projection.ContactPersonFunction = _ContactPersonFunctionText.ContactPersonFunction
  association [0..1] to I_ContactPersondepartment  as _CntctPersnDeptValueHelp     on $projection.ContactPersonDepartment = _CntctPersnDeptValueHelp.ContactPersonDepartment
  association [1..*] to I_ContactPersonDepartmentT as _ContactPersonDepartmentText on $projection.ContactPersonDepartment = _ContactPersonDepartmentText.ContactPersonDepartment
  association [1..*] to I_BPContactPersonAuthorityText as _BPContactPersonAuthorityText on $projection.ContactPersonAuthorityType = _BPContactPersonAuthorityText.ContactPersonAuthorityType
  association [1..*] to I_BPCntctPersnVIPIndicatorText as _BPCntctPersnVIPIndicatorText on $projection.ContactPersonVIPType = _BPCntctPersnVIPIndicatorText.ContactPersonVIPType
  association [1..1] to I_BPContact             as _BPContact on $projection.RelationshipNumber = _BPContact.RelationshipNumber
                                                              and  $projection.BusinessPartnerCompany = _BPContact .BusinessPartnerCompany
                                                              and $projection.BusinessPartnerPerson  = _BPContact.BusinessPartnerPerson
                                                              and $projection.ValidityEndDate        = _BPContact.ValidityEndDate 
{
  key but051.relnr        as RelationshipNumber,
      @ObjectModel.foreignKey.association : '_BusinessPartnerCompany'
  key but051.partner1     as BusinessPartnerCompany,
      @ObjectModel.foreignKey.association : '_BusinessPartnerPerson'
  key but051.partner2     as BusinessPartnerPerson,
      @Semantics.businessDate.to: true
  key but051.date_to      as ValidityEndDate, 
      @Semantics.businessDate.from: true
      _BPContact.ValidityStartDate as ValidityStartDate,       
      @ObjectModel: {
          foreignKey.association: '_CntctPersnFuncValueHelp'
        }
//      @ObjectModel.text.association : '_ContactPersonFunctionText'
      
      @API.element.releaseState:#DEPRECATED
      @API.element.successor:'BPContactPersonFunction'
      but051.pafkt        as ContactPersonFunction,
      but051.pafkt        as BPContactPersonFunction,
      but051.fnctn        as ContactPersonFunctionName,
      @ObjectModel: {
        foreignKey.association: '_CntctPersnDeptValueHelp'
      }
//      @ObjectModel.text.association: '_ContactPersonDepartmentText'
      but051.abtnr        as ContactPersonDepartment,
      but051.dprtmnt      as ContactPersonDepartmentName,
//      @ObjectModel.text.association : '_BPContactPersonAuthorityText'
      but051.paauth       as ContactPersonAuthorityType,
//      @ObjectModel.text.association : '_BPCntctPersnVIPIndicatorText'
      but051.pavip        as ContactPersonVIPType,
      but051.parem        as ContactPersonRemarkText,
      but051.tel_number   as PhoneNumber,
      but051.tel_extens   as PhoneNumberExtension,
      but051.fax_number   as FaxNumber,
      but051.fax_extens   as FaxNumberExtension,
      but051.smtp_address as EmailAddress,
      but051.reltyp       as RelationshipCategory,
      _ContactPersonDepartment,
      _ContactPersonFunction,
      _BusinessPartnerCompany,
      _BusinessPartnerPerson,
      _CntctPersnFuncValueHelp,
      _ContactPersonFunctionText,
      _CntctPersnDeptValueHelp,
      _ContactPersonDepartmentText,
      _BPContactPersonAuthorityText,
      _BPCntctPersnVIPIndicatorText,
      _BPContact      
} 
where
  but051.reltyp = 'BUR001';
```
