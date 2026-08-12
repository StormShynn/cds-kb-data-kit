---
name: I_WORKFORCEPERSONDEX
description: "You can use this CDS view to retrieve the data related to a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business question: How can I retrieve the data related to the workforce person based on the external ID of the person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONDEX')/$value
semantic_en: "You can use this CDS view to retrieve the data related to a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business question: How can I retrieve the data related to the workforce person based on the external ID of the person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Workforce Person — CDS view giao diện dựa trên Workforce Person."
keywords:
  - "workforce"
  - "person"
  - "business"
  - "partner"
  - "external"
  - "identification"
  - "type"
  - "first"
  - "name"
  - "last"
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - bo:salesorder
---
# I_WORKFORCEPERSONDEX

**You can use this CDS view to retrieve the data related to a workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business question: How can I retrieve the data related to the workforce person based on the external ID of the person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `PersonExternalID` |  | |  | `case when BPIdEmp.BPIdentificationNumber <> ' ' then BPIdEmp.BPIdentificationNumber else BPIdCon.BPIdentificationNumber end` | `CHAR(60)` | Identification Number |
| `BPIdentificationType` |  | |  | `case when BPIdEmp.BPIdentificationType <> ' ' then BPIdEmp.BPIdentificationType else BPIdCon.BPIdentificationType end` | `CHAR(6)` | Identification Type |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `MiddleName` |  | |  |  | `CHAR(40)` | Middle Name or Second Forename of a Person |
| `PersonFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `BirthName` |  | |  | `BusinessPartnerBirthName` | `CHAR(40)` | Name at birth of business partner |
| `Initials` |  | |  |  | `CHAR(10)` | "Middle Initial" or personal initials |
| `NativePreferredLanguage` |  | |  | `CorrespondenceLanguage` | `LANG(1)` | Business Partner: Correspondence Language |
| `LastNamePrefix` |  | |  |  | `CHAR(4)` | Name Prefix (Key) |
| `BusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner GUID |
| `UserID` |  | |  |  | `CHAR(12)` | User ID |
| `_ServicePerformerToSupplier` | | ✓ | | | | |
| `_WorkplaceAddress` | | ✓ | | | | |
| `_WorkAssgmtDets` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServicePerformerToSupplier` | `I_ServicePerformerToSuplr` | [0..*] |
| `_WorkplaceAddress` | `I_WorkplaceAddress` | [0..1] |
| `_WorkAssgmtDets` | `I_WorkAssgmtDetsDEX` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONDEX')/$value)*

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #COMPOSITE
@Analytics.dataExtraction: {
            enabled: true,
            delta.changeDataCapture:
    {

            mapping:[

                  {
                    table: 'but000', role: #MAIN,
                    viewElement: ['BusinessPartner'],
                    tableElement: ['partner']
                  },
                  {
                    table: 'but0id', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BusinessPartner', 'BPIdentificationType', 'PersonExternalID'],
                    tableElement: ['partner', 'type', 'idnumber']
                  },
                  {
                    table: 'usr21', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['UserID'],
                    tableElement: ['bname']
                }
            ]
        }
    }

@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name:'WorkforcePerson'

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Workforce Person'

define view entity I_WorkforcePersonDEX
  as select distinct from  I_BusinessPartner    as bp
    inner join             wfd_d_keymap         as keymap  on bp.BusinessPartner = keymap.business_partner_id
    left outer to one join        I_BuPaIdentification as BPIdEmp on
      ( BPIdEmp.BusinessPartner        = keymap.business_partner_id
      and BPIdEmp.BPIdentificationType = 'HCM001' ) // HCM001 - Employee ID
    left outer to one join        I_BuPaIdentification as BPIdCon on
      ( BPIdCon.BusinessPartner        = keymap.business_partner_id
      and BPIdCon.BPIdentificationType = 'HCM030' ) // HCM030 - Service Agent
    left outer to one join I_User               as user    on user.BusinessPartnerUUID = bp.BusinessPartnerUUID
  association [0..*] to I_ServicePerformerToSuplr as _ServicePerformerToSupplier on $projection.BusinessPartner = _ServicePerformerToSupplier.Person
  association [0..1] to I_WorkplaceAddress        as _WorkplaceAddress           on bp.BusinessPartnerUUID = _WorkplaceAddress.BusinessPartnerUUID
  association [1..*] to I_WorkAssgmtDetsDEX       as _WorkAssgmtDets             on $projection.BusinessPartner = _WorkAssgmtDets.BusinessPartner

{
  key bp.BusinessPartner          as BusinessPartner,

      case  
      when BPIdEmp.BPIdentificationNumber <> ' ' 
        then BPIdEmp.BPIdentificationNumber
      else
        BPIdCon.BPIdentificationNumber
      end                         as PersonExternalID,

      case  
      when BPIdEmp.BPIdentificationType <> ' '
        then BPIdEmp.BPIdentificationType
      else
        BPIdCon.BPIdentificationType
      end                         as BPIdentificationType,

      bp.FirstName                as FirstName,
      bp.LastName                 as LastName,
      bp.MiddleName               as MiddleName,
      bp.PersonFullName           as PersonFullName,
      bp.BusinessPartnerBirthName as BirthName,
      bp.Initials                 as Initials,
      bp.CorrespondenceLanguage   as NativePreferredLanguage,
      bp.LastNamePrefix           as LastNamePrefix,
      bp.BusinessPartnerUUID      as BusinessPartnerUUID,
      user.UserID                 as UserID,
      _ServicePerformerToSupplier,
      _WorkplaceAddress,
      _WorkAssgmtDets

}
where
  keymap.block_ind = ''
```
