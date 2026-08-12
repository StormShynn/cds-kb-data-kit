---
name: I_WORKASSGMTADDRESSDEX
description: "This CDS view is designed to provide detailed information about work assignment addresses, including various address components and related business partner data. It integrates data from multiple sources to offer a comprehensive view of address details associated with work assignments. This CDS view provides the data to answer the following business questions: What are the address details associated with a specific work assignment? Which business partner is linked to a particular work assignment address? What is the validity period for a given work assignment address? What are the geographical details (country, region, city, etc.) of a work assignment address? Is the business purpose for the associated business partner completed? What is the authorization group for the business partner linked to the work assignment address? Are there any blocked data or restrictions associated with the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTADDRESSDEX')/$value
semantic_en: "This CDS view is designed to provide detailed information about work assignment addresses, including various address components and related business partner data. It integrates data from multiple sources to offer a comprehensive view of address details associated with work assignments. This CDS view provides the data to answer the following business questions: What are the address details associated with a specific work assignment? Which business partner is linked to a particular work assignment address? What is the validity period for a given work assignment address? What are the geographical details (country, region, city, etc.) of a work assignment address? Is the business purpose for the associated business partner completed? What is the authorization group for the business partner linked to the work assignment address? Are there any blocked data or restrictions associated with the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Work Assignment Address Details — CDS view giao diện dựa trên I_WorkAssignmentKeyMapping."
keywords:
  - "work"
  - "assignment"
  - "address"
  - "details"
  - "business"
  - "partner"
  - "number"
  - "external"
  - "country2"
  - "digit"
  - "code"
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - bo:salesorganization
---
# I_WORKASSGMTADDRESSDEX

**This CDS view is designed to provide detailed information about work assignment addresses, including various address components and related business partner data. It integrates data from multiple sources to offer a comprehensive view of address details associated with work assignments. This CDS view provides the data to answer the following business questions: What are the address details associated with a specific work assignment? Which business partner is linked to a particular work assignment address? What is the validity period for a given work assignment address? What are the geographical details (country, region, city, etc.) of a work assignment address? Is the business purpose for the associated business partner completed? What is the authorization group for the business partner linked to the work assignment address? Are there any blocked data or restrictions associated with the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTADDRESSDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignmentBusinessPartner` | ✓ | |  | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `AddressNumber` | ✓ | |  | `AddressID` | `CHAR(10)` | Address Number |
| `WorkAssignment` |  | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `StartDate` |  | |  | `cast (tstmp_to_dats( EmploymentAddress.ValidityStartDate, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date)` | `DATS(8)` | Start Date |
| `EndDate` |  | |  | `cast (tstmp_to_dats( EmploymentAddress.ValidityEndDate, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date)` | `DATS(8)` | End Date |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SecondaryRegion` |  | |  |  | `CHAR(8)` | County code for county |
| `SecondaryRegionName` |  | |  |  | `CHAR(40)` | County |
| `TertiaryRegion` |  | |  |  | `CHAR(8)` | Township code for Township |
| `TertiaryRegionName` |  | |  |  | `CHAR(40)` | Township |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `DistrictName` |  | |  |  | `CHAR(40)` | District |
| `StreetPrefixName1` |  | |  |  | `CHAR(40)` | Street 2 |
| `StreetPrefixName2` |  | |  |  | `CHAR(40)` | Street 3 |
| `StreetName` |  | |  |  | `CHAR(60)` | Street |
| `StreetSuffixName1` |  | |  |  | `CHAR(40)` | Street 4 |
| `StreetSuffixName2` |  | |  |  | `CHAR(40)` | Street 5 |
| `HouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `HouseNumberSupplementText` |  | |  |  | `CHAR(10)` | House number supplement |
| `Floor` |  | |  |  | `CHAR(10)` | Floor in Building |
| `RoomNumber` |  | |  |  | `CHAR(10)` | Room or Apartment Number |
| `CareOfName` |  | |  |  | `CHAR(40)` | c/o name |
| `POBoxPostalCode` |  | |  |  | `CHAR(10)` | PO Box Postal Code |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
| `IsBusinessPurposeCompleted` |  | | `_BusinessPartner` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `DataControllerSet` |  | | `_BusinessPartner` | `DataControllerSet` | `CHAR(1)` | BP: Data Controller Set Flag |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `_BPProtectedAddress` | | ✓ | | | | |
| `_WorkAssignment` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPProtectedAddress` | `I_BPProtectedAddress` | [0..1] |
| `_WorkAssignment` | `I_WorkAssignmentDEX_1` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_WorkforcePerson` | `I_WorkforcePersonDEX_1` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTADDRESSDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTADDRESSDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@EndUserText.label: 'Work Assignment Address Details'

@VDM.viewType: #COMPOSITE
@Analytics.dataExtraction: {
            enabled: true,
            delta.changeDataCapture:
    {
            mapping:[
                  {
                    table: 'but020',
                    role: #MAIN,
                    viewElement: ['WorkAssignmentBusinessPartner','AddressNumber'],
                    tableElement: ['Partner','addrnumber']
                }
            ]
        }
    }
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER 
@ObjectModel.sapObjectNodeType.name:'AddressDetails'
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]

define view entity I_WorkAssgmtAddressDEX
  as select from I_WorkAssignmentKeyMapping as Assignment

    inner join   I_WorkAssignmentBP         as AssignmentBP      on AssignmentBP.WorkAssignment = Assignment.WorkAssignment
    inner join   I_BusPartAddress           as EmploymentAddress on EmploymentAddress.BusinessPartner = AssignmentBP.WorkAssignmentBusinessPartner


  association [0..1] to I_BPProtectedAddress as _BPProtectedAddress on  $projection.WorkAssignmentBusinessPartner = _BPProtectedAddress.BusinessPartner
                                                                    and $projection.AddressNumber   = _BPProtectedAddress.AddressID
  association [0..1] to I_WorkAssignmentDEX_1   as _WorkAssignment     on  _WorkAssignment.WorkAssignment = $projection.WorkAssignment
  association [1..1] to I_BusinessPartner    as _BusinessPartner    on  _BusinessPartner.BusinessPartner = $projection.WorkAssignmentBusinessPartner

  association [1]    to I_WorkforcePersonDEX_1  as _WorkforcePerson  on  _WorkforcePerson.WorkforcePersonExternalID = $projection.WorkforcePersonExternalID
{

     key EmploymentAddress.BusinessPartner as WorkAssignmentBusinessPartner,
     key EmploymentAddress.AddressID     as AddressNumber,  
          Assignment.WorkAssignment,
          Assignment.WorkAssignmentExternalID,
          Assignment.Country2DigitISOCode,
          AssignmentBP.WorkforcePersonExternalID,        
          cast (tstmp_to_dats( EmploymentAddress.ValidityStartDate,
          abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date) as StartDate,
          cast (tstmp_to_dats( EmploymentAddress.ValidityEndDate,
            abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date) as EndDate,
          EmploymentAddress._AddressDefaultRepresentation.Country,
          EmploymentAddress._AddressDefaultRepresentation.PostalCode,
          EmploymentAddress._AddressDefaultRepresentation.Region,
          EmploymentAddress._AddressDefaultRepresentation.SecondaryRegion,
          EmploymentAddress._AddressDefaultRepresentation.SecondaryRegionName,
          EmploymentAddress._AddressDefaultRepresentation.TertiaryRegion,
          EmploymentAddress._AddressDefaultRepresentation.TertiaryRegionName,
          EmploymentAddress._AddressDefaultRepresentation.CityName,
          EmploymentAddress._AddressDefaultRepresentation.DistrictName,
          EmploymentAddress._AddressDefaultRepresentation.StreetPrefixName1,
          EmploymentAddress._AddressDefaultRepresentation.StreetPrefixName2,
          EmploymentAddress._AddressDefaultRepresentation.StreetName,
          EmploymentAddress._AddressDefaultRepresentation.StreetSuffixName1,
          EmploymentAddress._AddressDefaultRepresentation.StreetSuffixName2,
          EmploymentAddress._AddressDefaultRepresentation.HouseNumber,
          EmploymentAddress._AddressDefaultRepresentation.HouseNumberSupplementText,
          EmploymentAddress._AddressDefaultRepresentation.Floor,
          EmploymentAddress._AddressDefaultRepresentation.RoomNumber,
          EmploymentAddress._AddressDefaultRepresentation.CareOfName,
          EmploymentAddress._AddressDefaultRepresentation.POBoxPostalCode,

          @Semantics.booleanIndicator: true
          @UI.hidden: true
          Assignment.IsBlocked,
          @Semantics.booleanIndicator: true
          @UI.hidden: true
          @Consumption.hidden: true
          _BusinessPartner.IsBusinessPurposeCompleted,
          @Consumption.hidden:true
          @UI.hidden:true          
          _BusinessPartner.DataControllerSet,
          _BusinessPartner.AuthorizationGroup,

          /* Associations */
          //_BPProtectedAddress,
          _BPProtectedAddress,
          _BusinessPartner,
          _WorkAssignment,
          _WorkforcePerson
          

}
```
