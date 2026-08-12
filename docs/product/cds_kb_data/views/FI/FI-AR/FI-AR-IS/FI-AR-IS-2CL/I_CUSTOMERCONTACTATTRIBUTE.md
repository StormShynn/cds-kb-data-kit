---
name: I_CUSTOMERCONTACTATTRIBUTE
description: "Customer Contact Attribute"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERCONTACTATTRIBUTE')/$value
semantic_en: "Customer Contact Attribute"
semantic_vi: "I_CUSTOMERCONTACTATTRIBUTE — CDS view cơ bản (transactional data) dựa trên udm_cct_attr."
keywords:
  - "customercontactattribute"
  - "customer"
  - "contact"
  - "business"
  - "partner"
  - "collection"
  - "segment"
  - "specialist"
tags:
  - FI
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
---
# I_CUSTOMERCONTACTATTRIBUTE

**Customer Contact Attribute**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERCONTACTATTRIBUTE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerContactUUID` | ✓ | |  | `cct_guid` | `CHAR(32)` | Customer Contact Key |
| `BusinessPartner` |  | |  | `customer` | `CHAR(10)` | Business Partner Number |
| `CollectionSegment` |  | |  | `coll_segment` | `CHAR(10)` | Collection Segment |
| `CollectionCustomerContact` |  | |  | `cct_id` | `NUMC(6)` | Contact ID |
| `CollectionSpecialist` |  | |  | `cast ( coll_specialist as coll_cct_collection_specialist preserving type )` | `CHAR(12)` | Collection Specialist |
| `ContactPerson` |  | |  | `contact_key` | `CHAR(10)` | Contact Person Key |
| `ContactPersonName` |  | |  | `cct_name` | `CHAR(40)` | Name of Contact Person at Business Partner |
| `ContactPersonEmailAddress` |  | |  | `cct_email` | `CHAR(128)` | Email Address of Contact Person at Business Partner |
| `ContactPersonPhoneNumber` |  | |  | `cct_phone` | `CHAR(30)` | Telephone Number of Contact Person at Business Partner |
| `ContactPersonFaxNumber` |  | |  | `cct_fax` | `CHAR(30)` | Fax Number of Contact Person at Business Partner |
| `ContactPersonFaxCountry` |  | |  | `cct_faxc` | `CHAR(3)` | Country/Region of Fax Number |
| `CustomerContactDirection` |  | |  | `cast ( cct_direction as coll_cct_direction preserving type )` | `CHAR(1)` | Contact Direction |
| `CustomerContactType` |  | |  | `cct_type` | `CHAR(3)` | Contact Type |
| `CustomerContactResult` |  | |  | `cast( cct_result as coll_cct_result preserving type )` | `CHAR(3)` | Result of Contact |
| `CustomerIsReached` |  | |  | `xreached` | `CHAR(1)` | Customer Reached |
| `CustomerContactDateTime` |  | |  | `cast( cct_time as coll_cct_datetime preserving type )` | `DEC(15)` | Customer Contact Time |
| `CustContactDurationInMinutes` |  | |  | `cct_duration` | `NUMC(3)` | Duration of Customer Contact |
| `CreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast ( created_at as coll_pr_creation_date_time preserving type )` | `DEC(15)` | Created At |
| `ChangedBy` |  | |  | `changed_by` | `CHAR(12)` | Last Changed By |
| `ChangedOnDateTime` |  | |  | `cast ( changed_at as coll_pr_changed_at preserving type )` | `DEC(15)` | Last Changed At |
| `CollectionWorklistItemUUID` |  | |  | `workitem_id` | `RAW(16)` | Key of Worklist Item |
| `_BusinessPartner` | | ✓ | | | | |
| `_CollectionSegment` | | ✓ | | | | |
| `_CollectionSpecialistCard` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_CreatedByCard` | | ✓ | | | | |
| `_ChangedByCard` | | ✓ | | | | |
| `_CollectionWorklistItem` | | ✓ | | | | |
| `_CustomerContactResult` | | ✓ | | | | |
| `_CustomerContactType` | | ✓ | | | | |
| `_CustomerContactDirection` | | ✓ | | | | |
| `_CustomerContact` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CollectionSegment` | `I_CollectionSegment` | [0..1] |
| `_CollectionSpecialistCard` | `I_UserContactCard` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_CreatedByCard` | `I_UserContactCard` | [0..1] |
| `_ChangedByCard` | `I_UserContactCard` | [0..1] |
| `_CollectionWorklistItem` | `I_CollectionWorklistItem` | [0..1] |
| `_CustomerContactResult` | `I_CustomerContactResult` | [0..1] |
| `_CustomerContactType` | `I_CustomerContactType` | [0..1] |
| `_CustomerContactDirection` | `I_CustomerContactDirection` | [0..1] |
| `_CustomerContact` | `I_CustomerContact` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERCONTACTATTRIBUTE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERCONTACTATTRIBUTE')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'ICCTATTR',
                compiler: { compareFilter: true } }
@AccessControl: { authorizationCheck:     #CHECK,
                  privilegedAssociations: [ '_CollectionSpecialistCard',
                                            '_CreatedByCard',
                                            '_ChangedByCard' ] }
@EndUserText: { label: 'Customer Contact Attribute' }
@VDM: { viewType: #BASIC,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@ObjectModel: { usageType: { serviceQuality: #A,
                             sizeCategory: #L,
                             dataClass: #TRANSACTIONAL },
                semanticKey: ['CustomerContactUUID', 'CollectionSegment' ],
                representativeKey: 'CustomerContactUUID',
                supportedCapabilities: [#EXTRACTION_DATA_SOURCE,#SQL_DATA_SOURCE] }
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'CollectionsCustomerContact'
@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
        }
@Consumption: { dbHints: [ 'USE_HEX_PLAN' ] }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CustomerContactAttribute
  as select from udm_cct_attr

  // VDM Associations
  // Business Partner
  association [0..1] to I_BusinessPartner          as _BusinessPartner          on $projection.BusinessPartner = _BusinessPartner.BusinessPartner

  // Collection Segment
  association [0..1] to I_CollectionSegment        as _CollectionSegment        on $projection.CollectionSegment = _CollectionSegment.CollectionSegment

  // Collection Specialist
  association [0..1] to I_UserContactCard          as _CollectionSpecialistCard on $projection.CollectionSpecialist = _CollectionSpecialistCard.ContactCardID

  // Fax Country
  association [0..1] to I_Country                  as _Country                  on $projection.ContactPersonFaxCountry = _Country.Country

  // Created By
  association [0..1] to I_UserContactCard          as _CreatedByCard            on $projection.CreatedByUser = _CreatedByCard.ContactCardID

  // Changed By
  association [0..1] to I_UserContactCard          as _ChangedByCard            on $projection.ChangedBy = _ChangedByCard.ContactCardID

  // Collection Worklist Item
  association [0..1] to I_CollectionWorklistItem   as _CollectionWorklistItem   on $projection.CollectionWorklistItemUUID = _CollectionWorklistItem.CollectionWorklistItemUUID

  // Customer Contact Result
  association [0..1] to I_CustomerContactResult    as _CustomerContactResult    on $projection.CustomerContactResult = _CustomerContactResult.CustomerContactResult

  // Customer Contact Type
  association [0..1] to I_CustomerContactType      as _CustomerContactType      on $projection.CustomerContactType = _CustomerContactType.CustomerContactType

  // Customer Contact Direction
  association [0..1] to I_CustomerContactDirection as _CustomerContactDirection on $projection.CustomerContactDirection = _CustomerContactDirection.CustomerContactDirection

  // Customer Contact
  association [0..1] to I_CustomerContact          as _CustomerContact          on $projection.ContactPerson = _CustomerContact.CustomerContact

{

      // VDM Fields
  key cct_guid                                                                   as CustomerContactUUID,

      @ObjectModel: { foreignKey: { association: '_BusinessPartner' } }
      customer                                                                   as BusinessPartner,

      @ObjectModel: { foreignKey: { association: '_CollectionSegment' } }
      coll_segment                                                               as CollectionSegment,

      cct_id                                                                     as CollectionCustomerContact,

      @ObjectModel: { foreignKey: { association: '_CollectionSpecialistCard' } }
      //      @Semantics: { user: { id: true } }
      cast ( coll_specialist as coll_cct_collection_specialist preserving type ) as CollectionSpecialist,

      @ObjectModel: { foreignKey: { association: '_CustomerContact' } }
      contact_key                                                                as ContactPerson,

      cct_name                                                                   as ContactPersonName,

      @Semantics: { eMail: { address: true } }
      cct_email                                                                  as ContactPersonEmailAddress,

      @Semantics: { telephone: { type: [ #PREF ] } }
      cct_phone                                                                  as ContactPersonPhoneNumber,

      @Semantics: { telephone: { type: [ #FAX ] } }
      cct_fax                                                                    as ContactPersonFaxNumber,

      @ObjectModel: { foreignKey: { association: '_Country' } }
      cct_faxc                                                                   as ContactPersonFaxCountry,

      @ObjectModel: { foreignKey: { association: '_CustomerContactDirection' } }
      cast ( cct_direction as coll_cct_direction  preserving type )              as CustomerContactDirection,

      @ObjectModel: { foreignKey: { association: '_CustomerContactType' } }
      cct_type                                                                   as CustomerContactType,

      @ObjectModel: { foreignKey: { association: '_CustomerContactResult' } }
      cast( cct_result as coll_cct_result preserving type )                      as CustomerContactResult,

      xreached                                                                   as CustomerIsReached,
      cast( cct_time as coll_cct_datetime preserving type )                      as CustomerContactDateTime,
      cct_duration                                                               as CustContactDurationInMinutes,

      //      @Semantics: { user: { id: true,
      @Semantics: { user: { createdBy: true } }
      @ObjectModel: { foreignKey: { association: '_CreatedByCard' } }
      created_by                                                                 as CreatedByUser,

      @Semantics: { systemDateTime: { createdAt: true } }
      cast ( created_at as coll_pr_creation_date_time preserving type )          as CreationDateTime,

      //      @Semantics: { user: { id: true,
      @Semantics: { user: { lastChangedBy: true } }
      @ObjectModel: { foreignKey: { association: '_ChangedByCard' } }
      changed_by                                                                 as ChangedBy,

      @Semantics: { systemDateTime: { lastChangedAt: true } }
      cast ( changed_at as coll_pr_changed_at preserving type )                  as ChangedOnDateTime,

      workitem_id                                                                as CollectionWorklistItemUUID,

      // Exposed Associations
      _BusinessPartner,
      _CollectionSegment,
      _CollectionSpecialistCard,
      _Country,
      _CreatedByCard,
      _ChangedByCard,
      _CollectionWorklistItem,
      _CustomerContactResult,
      _CustomerContactType,
      _CustomerContactDirection,
      _CustomerContact

}
```
